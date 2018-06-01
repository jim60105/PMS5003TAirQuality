<?php
include('setMySQL.php');
//include('encrypt.php');

$pm1= ($_GET["pm1"]!="0")?$_GET["pm1"]:NULL;
$pm10= ($_GET["pm10"]!="0")?$_GET["pm10"]:NULL;
$pm25= ($_GET["pm25"]!="0")?$_GET["pm25"]:NULL;
$temp= ($_GET["temp"]!="0")?$_GET["temp"]:NULL;
$humid= ($_GET["humid"]!="0")?$_GET["humid"]:NULL;

$db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname.';port='.$port,$dbuser,$dbpass);

if(isset($_GET["clientNum"])){
    $clientNum = $_GET["clientNum"];
    $stmt = $db->prepare("INSERT INTO airdataqueue (no, time, pm1, pm10, pm25, temp, humid, clientNum) VALUES (NULL, CURRENT_TIMESTAMP, :pm1, :pm10, :pm25, :temp, :humid, :clientNum);");
    $stmt->bindValue(':pm1',$pm1);
    $stmt->bindValue(':pm10',$pm10);
    $stmt->bindValue(':pm25',$pm25);
    $stmt->bindValue(':temp',$temp);
    $stmt->bindValue(':humid',$humid);
    $stmt->bindValue(':clientNum',$clientNum);
    $stmt->execute();

    $stmt = $db->prepare("UPDATE airdatadevice SET time=CURRENT_TIMESTAMP, pm1=:pm1, pm10=:pm10, pm25=:pm25, temp=:temp, humid=:humid WHERE clientNum=:clientNum;");
    $stmt->bindValue(':pm1',$pm1);
    $stmt->bindValue(':pm10',$pm10);
    $stmt->bindValue(':pm25',$pm25);
    $stmt->bindValue(':temp',$temp);
    $stmt->bindValue(':humid',$humid);
    $stmt->bindValue(':clientNum',$clientNum);
    $stmt->execute();
}


////check and flush the queue
while(checkFlush($db,$clientNum)>=10){
    doFlush($db,$clientNum);
}

function checkFlush($db,$clientNum)
{
    $stmt = $db->prepare("SELECT TIMESTAMPDIFF(MINUTE,(SELECT time FROM airdataqueue WHERE clientNum = :clientNum ORDER BY time ASC LIMIT 1),(SELECT time FROM airdataqueue WHERE clientNum = :clientNum ORDER BY time DESC LIMIT 1)) AS timediff;");
    $stmt->bindValue(':clientNum',$clientNum);
    $stmt->execute();
    $row = $stmt->fetch();
    return $row['timediff'];
}

function doFlush($db,$clientNum){
    $stmt = $db->prepare("SELECT time FROM airdataqueue WHERE clientNum = :clientNum ORDER BY time ASC LIMIT 1;");
    $stmt->bindValue(':clientNum',$clientNum);
    $stmt->execute();
    $row = $stmt->fetch();
    $startRow = $row['time'];

    $stmt = $db->prepare("SELECT AVG(pm1) AS pm1, AVG(pm10) AS pm10, AVG(pm25) AS pm25, AVG(temp) AS temp, AVG(humid) AS humid FROM airdataqueue WHERE clientNum = :clientNum;");
    $stmt->bindValue(':clientNum',$clientNum);
    $stmt->execute();
    $row = $stmt->fetch();

    foreach ($row as $key => $value){
        if(empty($value)){
            $row[$key] = 0;
        }
    }

    $stmt = $db->prepare("INSERT INTO airdata (no, time, pm1, pm10, pm25, temp, humid, clientNum) VALUES (NULL, (SELECT TIMESTAMPADD(MINUTE, 5, :startRow)), :pm1, :pm10, :pm25, :temp, :humid, :clientNum);");
    $stmt->bindValue(':startRow',$startRow);
    $stmt->bindValue(':pm1',$row['pm1']);
    $stmt->bindValue(':pm10',$row['pm10']);
    $stmt->bindValue(':pm25',$row['pm25']);
    $stmt->bindValue(':temp',$row['temp']);
    $stmt->bindValue(':humid',$row['humid']);
    $stmt->bindValue(':clientNum',$clientNum);
    $stmt->execute();

    checkIFTTTDevice($db,$row,$clientNum);
    updateThingSpeak($db,$row);

    $stmt = $db->prepare("DELETE FROM `airdataqueue` WHERE `clientNum` = :clientNum;");
    $stmt->bindValue(':clientNum',$clientNum);
    $stmt->execute();
}

function checkIFTTTDevice($db,$avgData,$clientNum){
    $stmt = $db->prepare("SELECT `a`.*,`b`.`iftttKey`,`c`.`device_id` as `airdatadevice-device_id` FROM `useriftttdevice` as `a`,`user` as `b`, `airdatadevice` as `c` WHERE `c`.`clientNum` = :clientNum AND `a`.`device_id` = `c`.`device_id` AND `a`.`user_no` = `b`.`no` AND `a`.`type` = 'THU'");
    $stmt->bindValue(':clientNum',$clientNum);
    $stmt->execute();
    foreach($stmt as $row){
        if ($row['air_type'] == 'AQI'){
            $avgData['AQI'] = calcAQI($avgData['pm25'],$avgData['pm10']);
        }
        if ($row['monitor_value'] <= $avgData[$row['air_type']]){
            sendIFTTT($row,$avgData);
        }
    }
}

function sendIFTTT($iftttDevice,$avgData){
    if ($iftttDevice['air_type'] == 'AQI') {
        $AQIString = ['(離線)', '良好', '普通', '對敏感族群不健康', '對所有族群不健康', '非常不健康', '危害'];
        $avgData['AQI'] = $AQIString[$avgData['AQI']];
    }
    $url = "https://maker.ifttt.com/trigger/AirAlert/with/key/" . $iftttDevice['iftttKey'];
    $param = array('value1' => $iftttDevice['device_id'], 'value2' => $iftttDevice['air_type'], 'value3' => $avgData[$iftttDevice['air_type']]);
    echo json_encode($param);
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_REFERER, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($param));

    $result = curl_exec($ch);

    curl_close($ch);
//    if ($result < 1) {
//        error_log("Send IFTTT error: result=" . $result . " url=" . $url . " param = " . $param);
//    }

}

function updateThingSpeak($db,$row){
    if(isset($_GET["clientNum"])) {
        $stmt = $db->prepare("SELECT ThingSpeakWriteKey FROM airdatadevice WHERE clientNum = :clientNum");
        $stmt->bindValue(':clientNum', $_GET["clientNum"]);
        $stmt->execute();
        $writeKey = $stmt->fetch();
        $writeKey = $writeKey['ThingSpeakWriteKey'];

        //echo $writeKey;
        $url = "https://api.thingspeak.com/update?".
            "api_key=" . $writeKey .
            "&field1=" . $row['pm1'] .
            "&field2=" . $row['pm25'] .
            "&field3=" . $row['pm10'] .
            "&field4=" . $row['temp'] .
            "&field5=" . $row['humid'];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_REFERER, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        $result = curl_exec($ch);

        curl_close($ch);
        if($result<1){
            error_log("UpdateThingSpeak error: result=".$result." url=".$url." writeKey =".$writeKey);
        }
    }
}

function calcAQI($pm25,$pm10)
{
    $temp25 = 0;
    $temp10 = 0;

    # 顏色及數值依照政府標準
    # https://taqm.epa.gov.tw/taqm/tw/b0201.aspx
    switch (true){
        case ($pm25<=15.4):                        //green
            $temp25 = 1;
            break;
        case ($pm25>=15.5 && $pm25<=35.4):    //yellow
            $temp25 = 2;
            break;
        case ($pm25>=35.5 && $pm25<=54.4):    //orange
            $temp25 = 3;
            break;
        case ($pm25>=54.5 && $pm25<=150.4):   //red
            $temp25 = 4;
            break;
        case ($pm25>=150.5 && $pm25<=250.4):  //purple
            $temp25 = 5;
            break;
        case ($pm25>=250.5):                       //maroon
            $temp25 = 6;
            break;
    }
    switch (true){
        case ($pm10<=54):
            $temp10 = 1;
            break;
        case ($pm10>=55 && $pm10<=125):
            $temp10 = 2;
            break;
        case ($pm10>=126 && $pm10<=254):
            $temp10 = 3;
            break;
        case ($pm10>=255 && $pm10<=354):
            $temp10 = 4;
            break;
        case ($pm10>=355 && $pm10<=424):
            $temp10 = 5;
            break;
        case ($pm10>=425):
            $temp10 = 6;
            break;
    }
    return max($temp10, $temp25);
}
?>

