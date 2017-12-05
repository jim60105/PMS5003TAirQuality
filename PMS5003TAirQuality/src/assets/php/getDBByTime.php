<?php
include('setMySQL.php');
//include('encrypt.php');

$minDate= $_GET["minDate"];
$maxDate= $_GET["maxDate"];
if(isset($_GET["client"])) {
    $client = $_GET["client"];
}else{
    $client = -1;
}
//$_GET["client"] directed used at line 12.
$arr = array();

$db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname.';port='.$port,$dbuser,$dbpass);
$stmt = $db->prepare("SELECT * FROM airData WHERE time BETWEEN :minDate AND :maxDate");
if($client>0){
    $stmt = $db->prepare("SELECT * FROM airData WHERE (time BETWEEN :minDate AND :maxDate)AND(clientNum = :client)");
    $stmt->bindValue(':client',$client);
}
$stmt->bindValue(':minDate',$minDate);
$stmt->bindValue(':maxDate',$maxDate);
$stmt->execute();

foreach($stmt as $row){
    array_push($arr,$row);
}
//輸出
echo json_encode($arr);
?>
