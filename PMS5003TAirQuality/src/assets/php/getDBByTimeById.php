<?php
include('setMySQL.php');
//include('encrypt.php');

$minDate= $_GET["minDate"];
$maxDate= $_GET["maxDate"];
$device_idList = json_decode($_GET["device_id"],true);
//if(isset($_GET["client"])) {
//    $client = $_GET["client"];
//}else{
//    $client = -1;
//}
//$_GET["client"] directed used at line 12.
$arr = array();

$db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname.';port='.$port,$dbuser,$dbpass);
$stmt = $db->prepare("SELECT * FROM airdata WHERE time BETWEEN :minDate AND :maxDate");
foreach($device_idList as $device_id) {
    $stmt = $db->prepare("SELECT * FROM airdata WHERE (time BETWEEN :minDate AND :maxDate)AND(clientNum = :client)");
    $stmt->bindValue(':client', $device_id);
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
