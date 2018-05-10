<?php
$type = 2;
$user_no = -1;
include('login.php');
$device_idList = json_decode($_POST["device_id"],true);
$isSuccess = true;
$arr = array();
if($_POST["displayNearest"]==='false'){
    $displayNearest = 0;
}else{
    $displayNearest = 1;
}

if($loginSuccess) {
    $db = new PDO('mysql:host=' . $dbhost . ';dbname=' . $dbname . ';port=' . $port, $dbuser, $dbpass);
    $stmt = $db->prepare("DELETE FROM `userdevice` WHERE `user_no` = :user_no;");
    $stmt->bindValue(':user_no', $user_no);
    $isSuccess = $stmt->execute() && $isSuccess;

    foreach($device_idList as $device) {
        $stmt = $db->prepare("INSERT INTO `userdevice` (`no`, `user_no`, `type`, `device_id`) VALUES (NULL, :user_no, :typee, :devices)");
        $stmt->bindValue(':user_no', $user_no);
        $stmt->bindValue(':devices', $device[0]);
        $stmt->bindValue(':typee', $device[1]);
        $isSuccess = $stmt->execute() && $isSuccess;
    }

    $stmt = $db->prepare("UPDATE `user` SET `useNearest` = :displayNearest WHERE `user`.`no` = :user_no");
    $stmt->bindValue(':displayNearest', $displayNearest);
    $stmt->bindValue(':user_no', $user_no);
    $isSuccess = $stmt->execute() && $isSuccess;

    if($isSuccess){
        echo json_encode(['true']);
    }else{
        echo json_encode(['insertError']);
    }
}else{
    echo json_encode(['loginError']);
}
?>
