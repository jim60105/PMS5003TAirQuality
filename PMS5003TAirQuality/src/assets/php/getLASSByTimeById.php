<?php
include('setMySQL.php');
//include('encrypt.php');

$minDate= $_POST['minDate'];
$maxDate= $_POST['maxDate'];
$device_idList = json_decode($_POST['device_id'],true);

$arr = array();

$db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname.';port='.$port,$dbuser,$dbpass);
foreach($device_idList as $device_id) {
    $stmt = $db->prepare("SELECT * FROM lassdata WHERE (time BETWEEN :minDate AND :maxDate)AND(device_id = :device_id)");
    $stmt->bindValue(':device_id', $device_id);
    $stmt->bindValue(':minDate', $minDate);
    $stmt->bindValue(':maxDate', $maxDate);
    $stmt->execute();

    foreach ($stmt as $row) {
        array_push($arr, $row);
    }
}
//輸出
echo json_encode($arr);
?>
