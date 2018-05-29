<?php
$type = 2;
$user_no = -1;
include('login.php');
$isSuccess = true;
$arr = array();
$iftttKey = isset($_POST['iftttKey']) ? ($_POST["iftttKey"]) : '';

if($loginSuccess) {
    $db = new PDO('mysql:host=' . $dbhost . ';dbname=' . $dbname . ';port=' . $port, $dbuser, $dbpass);
    $stmt = $db->prepare("UPDATE `user` SET `iftttKey` = :iftttKey WHERE `user`.`no` = :user_no");
    $stmt->bindValue(':iftttKey', $iftttKey);
    $stmt->bindValue(':user_no', $user_no);
    $isSuccess = $stmt->execute() && $isSuccess;

    if($isSuccess){
        echo json_encode(['true']);
    }else{
        echo json_encode(['updateError']);
    }
}else{
    echo json_encode(['loginError']);
}
?>
