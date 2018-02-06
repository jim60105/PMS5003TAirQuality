<?php
include('setMySQL.php');
//include('encrypt.php');
$arr = array();

$db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname.';port='.$port,$dbuser,$dbpass);
$stmt = $db->prepare("SELECT * FROM `lassdevice` ORDER BY `gps_lat` ASC");
$stmt->execute();

foreach ($stmt as $row) {
    array_push($arr, $row);
}
//輸出
echo json_encode($arr);
?>
