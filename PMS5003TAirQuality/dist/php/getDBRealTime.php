<?php
include('setMySQL.php');
//include('encrypt.php');

$arr = array();

$db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname.';port='.$port,$dbuser,$dbpass);
$stmt = $db->prepare("SELECT * FROM (SELECT * FROM airDataQueue ORDER BY time DESC LIMIT 99999999999) t GROUP BY clientNum ORDER BY clientNum ASC");
$stmt->execute();

if(!$stmt->rowCount()) {
    $stmt = $db->prepare("SELECT * FROM (SELECT * FROM airData ORDER BY time DESC LIMIT 99999999999) t GROUP BY clientNum ORDER BY clientNum ASC");
    $stmt->execute();
}
//去除重複
foreach($stmt as $row){
    array_push($arr,$row);
}
//$arr = array_unique($arr);
//輸出
echo json_encode($arr);
?>
