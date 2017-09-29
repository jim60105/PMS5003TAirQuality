<?php
include('setMySQL.php');
//include('encrypt.php');

$minDate= $_GET["minDate"];
$maxDate= $_GET["maxDate"];
$arr = array();

$db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname.';port='.$port,$dbuser,$dbpass);
$stmt = $db->prepare("SELECT * FROM airData WHERE time BETWEEN :minDate AND :maxDate");
$stmt->bindValue(':minDate',$minDate);
$stmt->bindValue(':maxDate',$maxDate);
$stmt->execute();

//去除重複
foreach($stmt as $row){
    array_push($arr,$row);
}
//$arr = array_unique($arr);
//輸出
echo json_encode($arr);
?>
