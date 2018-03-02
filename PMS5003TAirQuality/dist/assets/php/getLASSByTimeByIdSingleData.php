<?php
include('setMySQL.php');
//include('encrypt.php');
if(isset($_GET["time"])) {
    $time = $_GET["time"];
    $getLatest = false;
}else{
    $getLatest = true;
    $time = gmdate("Y-m-d H:i:s");
}
$device_idList = json_decode($_GET["device_id"],true);

$arr = array();
$db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname.';port='.$port,$dbuser,$dbpass);
foreach($device_idList as $device_id) {
    if($getLatest) {
        $stmt = $db->prepare("SELECT * FROM `lassdevice` WHERE `device_id` = :device_id");
    }else {
        $stmt = $db->prepare("
            SELECT * FROM lassdata as t
            INNER JOIN (
                SELECT lassdata.device_id as device_id2, MAX(lassdata.time) as max_time
                FROM lassdata
                WHERE lassdata.time < :timee AND lassdata.device_id = :device_id
            ) as group_table
            ON t.device_id = group_table.device_id2 and t.time = group_table.max_time
        ");
        $stmt->bindValue(':timee', $time);
    }
    $stmt->bindValue(':device_id', $device_id);
    $stmt->execute();
    //把data倒進去
    foreach($stmt as $row){
        array_push($arr,$row);
    }

}
//輸出
echo json_encode($arr);
?>