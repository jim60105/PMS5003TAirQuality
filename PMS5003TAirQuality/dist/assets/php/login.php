<?php
include('encrypt.php');
include('setMySQL.php');

$email = isset($_POST['_e']) ? $_POST['_e'] : '';
$password = isset($_POST['_p']) ? ($_POST["_p"]) : '';

//echo $email;
//echo $password;

//登入
$db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname,$dbuser,$dbpass);
$db->query('set names utf8;');
$stmt = $db->prepare("SELECT * FROM user WHERE email = :email && password = :password ;");
$stmt->bindValue(':email',$email);
$stmt->bindValue(':password',$password);
$stmt->execute();
$row = $stmt->fetch();
if($row==[]){
    $stmt = $db->prepare("SELECT email FROM user WHERE email = :email ;");
    $stmt->bindValue(':email',$email);
    $stmt->execute();
    $row = $stmt->fetch();
}else{
    //將密碼加密
    $row['_e'] = $row['email'];
    $row['_p'] = $row['password'];
//    $row['_p'] = encrypt($row['password'],$key);
    unset($row['password']);
    unset($row['email']);
}

echo json_encode($row);

?>
