<?php
include('setMySQL.php');
include('encrypt.php');

$id = strip_tags($_POST["id"]);
$password = encrypt(strip_tags($_POST["password"]),$key);
$name = strip_tags($_POST["name"]);
$email = strip_tags($_POST["email"]);

//檢查重複id
$db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname,$dbuser,$dbpass);
$stmt = $db->prepare("SELECT * FROM user WHERE id = :id ;");
$stmt->bindValue(':id',$id);
$stmt->execute();
$row = $stmt->fetch();
if($row!=[]){
    echo 'id';
}else{
    //確認email
    $stmt = $db->prepare("SELECT email FROM user WHERE email = :email ;");
    $stmt->bindValue(':email',$email);
    $stmt->execute();
    if($row!=[]){
        echo 'email';
    }else{
        //寫入註冊資料
        $stmt = $db->prepare("INSERT INTO user (no, id, password, email) VALUES (NULL, :id , :password , :email)");
        $stmt->bindValue(':id',$id);
        $stmt->bindValue(':password',$password);
        $stmt->bindValue(':name',$name);
        $stmt->bindValue(':email',$email);
        $stmt->execute();
        if($stmt->rowCount() == 1){
            echo 'true';
        }else{
            echo json_encode('ErrorCode:'.$stmt->errorInfo());
        }
    }
}
?>
