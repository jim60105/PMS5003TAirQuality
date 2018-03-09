<?php
$type = 2;
$user_no = -1;
include('login.php');

$arr = array();
if($loginSuccess) {
    $db = new PDO('mysql:host=' . $dbhost . ';dbname=' . $dbname . ';port=' . $port, $dbuser, $dbpass);
    $stmt = $db->prepare("SELECT * FROM `userdevice` WHERE user_no = :no");
    $stmt->bindValue(':no', $user_no);
    $stmt->execute();

    array_push($arr,$displayNearest);
    foreach ($stmt as $row) {
        array_push($arr, $row);
    }

    //輸出
    if(sizeof($arr)==0) {
        echo '[]';
    }else{
        echo json_encode($arr);
    }
}
?>
