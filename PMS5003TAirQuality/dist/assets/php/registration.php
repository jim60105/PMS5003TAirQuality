<?php
include('setMySQL.php');

$email = isset($_POST['_e']) ? strip_tags($_POST['_e']) : '';
$password = isset($_POST['_p']) ? strip_tags($_POST["_p"]) : '';

if(strlen($password)<6 || strpos($email,'@')===false){
    echo 'false';
}else {

//檢查重複id
    $db = new PDO('mysql:host=' . $dbhost . ';dbname=' . $dbname, $dbuser, $dbpass);
    $stmt = $db->prepare("SELECT * FROM user WHERE email = :email ;");
    $stmt->bindValue(':email', $email);
    $stmt->execute();
    $row = $stmt->fetch();
    if ($row != []) {
        echo 'email';
    } else {
        //寫入註冊資料
        $stmt = $db->prepare("INSERT INTO user (no, email, password) VALUES (NULL, :email, :password)");
        $stmt->bindValue(':email', $email);
        $stmt->bindValue(':password', password_hash($password, PASSWORD_DEFAULT));
        $stmt->execute();
        if ($stmt->rowCount() == 1) {
            echo 'true';
        } else {
            echo json_encode('ErrorCode:' . $stmt->errorInfo());
        }
    }
}
?>
