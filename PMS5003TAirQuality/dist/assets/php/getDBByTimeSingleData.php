<?php
include('setMySQL.php');
//include('encrypt.php');
if(isset($_GET["time"])) {
    $time = $_GET["time"];
    $realTime = false;
}else{
    $realTime = true;
    $time = date("Y-m-d H:i:s");
}

$arr = array();

$db = new PDO('mysql:host=' . $dbhost . ';dbname=' . $dbname . ';port=' . $port, $dbuser, $dbpass);
if($realTime) {
//查詢data queue

    $stmt = $db->prepare("SELECT * FROM (SELECT * FROM airDataQueue ORDER BY time DESC LIMIT 99999999999) t GROUP BY clientNum ORDER BY clientNum ASC");
    $stmt->execute();
    foreach($stmt as $row){
        array_push($arr,$row);
    }
}
//查詢client數量
$stmt2 = $db->prepare("SELECT * FROM clientInfo");
$stmt2->execute();
//如果arr的資料沒有>client的數量，就到data裡面抓
if(count($arr)<($stmt2->rowCount())) {
    //$stmt3 = $db->prepare("SELECT * FROM (SELECT * FROM airData ORDER BY time DESC LIMIT 99999999999) t GROUP BY clientNum ORDER BY clientNum ASC");
    $stmt3 = $db->prepare("SELECT * FROM (SELECT * FROM `airdata` ORDER BY time DESC LIMIT 99999999999) t WHERE time < :timee GROUP BY clientNum ORDER BY clientNum ASC");
    $stmt3->bindValue(':timee',$time);
    $stmt3->execute();
    //把data倒進去
    foreach($stmt3 as $row){
        array_push($arr,$row);
    }
}

//輸出
echo json_encode($arr);
?>
