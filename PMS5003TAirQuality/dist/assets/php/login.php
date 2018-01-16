<?php
include('encrypt.php');
include('setMySQL.php');

$id = $_POST["id"];
$password = encrypt($_POST["password"],$key);

//登入
$db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname,$dbuser,$dbpass);
$db->query('set names utf8;'); 
$stmt = $db->prepare("SELECT * FROM user WHERE id = :id && password = :password ;");
$stmt->bindValue(':id',$id);
$stmt->bindValue(':password',$password);
$stmt->execute();
$row = $stmt->fetch();
if($row==[]){
    $stmt = $db->prepare("SELECT id FROM user WHERE id = :id ;");
    $stmt->bindValue(':id',$id);
    $stmt->execute();
    $row = $stmt->fetch();
}else{
    //將密碼加密
    $row['password'] = encrypt($row['password'],$key);
}

echo json_encode($row);

?>
