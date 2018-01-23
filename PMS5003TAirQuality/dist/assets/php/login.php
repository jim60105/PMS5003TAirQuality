<?php
include('encrypt.php');
include('setMySQL.php');

$email = isset($_POST['_e']) ? strip_tags($_POST['_e']) : '';
$type = isset($_POST['type']) ? $_POST['type'] : '';
$password = '';
if($type == 1){
    //Plain text login
    $password = isset($_POST['_p']) ? encrypt(strip_tags($_POST["_p"])) : '';
}else if($type == 2){
    //Cookie login
    $password = isset($_POST['_p']) ? strip_tags($_POST["_p"]) : '';
}

//登入
$db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname,$dbuser,$dbpass);
$db->query('set names utf8;');
$stmt = $db->prepare("SELECT * FROM user WHERE email = :email && password = :password ;");
$stmt->bindValue(':email',$email);
$stmt->bindValue(':password',$password);
$stmt->execute();
$row = $stmt->fetch();
if($row!=[]){
    $row['_p'] = $row['password'];
    unset($row['password']);
    $row['_e'] = $row['email'];
    unset($row['email']);
}else{
    $stmt = $db->prepare("SELECT email FROM user WHERE email = :email ;");
    $stmt->bindValue(':email',$email);
    $stmt->execute();
    $row = $stmt->fetch();
    if($row!=[]){
        $row['_e'] = $row['email'];
        unset($row['email']);
    }
}

echo json_encode($row);

?>
