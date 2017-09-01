<?php
include('setMySQL.php');
//include('encrypt.php');

$arr = array();
//$minDate= $_GET["minDate"];

$db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname.';port='.$port,$dbuser,$dbpass);
$stmt = $db->prepare("SELECT * FROM clientInfo");
//$stmt->bindValue(':minDate',$minDate);
$stmt->execute();

//去除重複
foreach($stmt as $row){
    array_push($arr,$row);
}
//$arr = array_unique($arr);
//輸出
echo json_encode($arr);
?>
