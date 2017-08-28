<?php
include('setMySQL.php');
//include('encrypt.php');

//$pm1= $_GET["pm1"];
$arr = array();

$db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname.';port='.$port,$dbuser,$dbpass);
$stmt = $db->prepare("SELECT * FROM 'airData'");
//$stmt->bindValue(':clientNum',$clientNum);
$stmt->execute();

//去除重複
foreach($stmt as $row){
    array_push($arr,$row['item_no']);
}
$arr = array_unique($arr);
//輸出
echo json_encode($arr);
?>