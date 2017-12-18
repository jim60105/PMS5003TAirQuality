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
}


////check and flush the queue
while(checkFlush($db,$clientNum)>10){
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

    $stmt = $db->prepare("SELECT AVG(pm1) AS pm1, AVG(pm10) AS pm10, AVG(pm25) AS pm25, AVG(temp) AS temp, AVG(humid) AS humid FROM airdataqueue WHERE clientNum = :clientNum AND time BETWEEN :startRow AND (SELECT TIMESTAMPADD(MINUTE, 10, :startRow));");
    $stmt->bindValue(':clientNum',$clientNum);
    $stmt->bindValue(':startRow',$startRow);
    $stmt->execute();
    $row = $stmt->fetch();

    updateThingSpeak($db,$row);

    $stmt = $db->prepare("INSERT INTO airdata (no, time, pm1, pm10, pm25, temp, humid, clientNum) VALUES (NULL, (SELECT TIMESTAMPADD(MINUTE, 5, :startRow)), :pm1, :pm10, :pm25, :temp, :humid, :clientNum);");
    $stmt->bindValue(':startRow',$startRow);
    $stmt->bindValue(':pm1',$row['pm1']);
    $stmt->bindValue(':pm10',$row['pm10']);
    $stmt->bindValue(':pm25',$row['pm25']);
    $stmt->bindValue(':temp',$row['temp']);
    $stmt->bindValue(':humid',$row['humid']);
    $stmt->bindValue(':clientNum',$clientNum);
    $stmt->execute();

    $stmt = $db->prepare("DELETE FROM airdataqueue WHERE clientNum = :clientNum AND time BETWEEN :startRow AND (SELECT TIMESTAMPADD(MINUTE, 10, :startRow));");
    $stmt->bindValue(':clientNum',$clientNum);
    $stmt->bindValue(':startRow',$startRow);
    $stmt->execute();
}

function updateThingSpeak($db,$row){
    if(isset($_GET["clientNum"])) {
        $stmt = $db->prepare("SELECT ThingSpeakWriteKey FROM clientinfo WHERE no = :clientNum");
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
?>

