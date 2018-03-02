<?php
include('setMySQL.php');
//include('encrypt.php');

//清理過期devices
$db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname.';port='.$port,$dbuser,$dbpass);
$stmt = $db->prepare("DELETE FROM `lassdevice` WHERE `time` < DATE_SUB(UTC_TIMESTAMP(), INTERVAL 6 HOUR)");
$stmt->execute();

$arr = array();

$stmt = $db->prepare("SELECT * FROM `lassdevice` ORDER BY `gps_lat` ASC");
$stmt->execute();

foreach ($stmt as $row) {
    array_push($arr, $row);
}
//輸出
echo json_encode($arr);
?>
