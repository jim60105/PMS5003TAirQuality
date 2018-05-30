<?php
$type = 2;
$user_no = -1;
include('login.php');
$isSuccess = true;
$arr = array();
$iftttKey = isset($_POST['iftttKey']) ? ($_POST["iftttKey"]) : '';
if($iftttKey==''){
    $iftttKey = NULL;
}
$iftttDevices = json_decode($_POST["iftttDevices"],true);

if($loginSuccess) {
    $db = new PDO('mysql:host=' . $dbhost . ';dbname=' . $dbname . ';port=' . $port, $dbuser, $dbpass);

    $stmt = $db->prepare("DELETE FROM `useriftttdevice` WHERE `user_no` = :user_no;");
    $stmt->bindValue(':user_no', $user_no);
    $isSuccess = $stmt->execute() && $isSuccess;

    foreach($iftttDevices as $device) {
        $stmt = $db->prepare("INSERT INTO `useriftttdevice` (`no`, `user_no`, `type`, `device_id`, `air_type`, `monitor_value`) VALUES (NULL, :user_no, :typee, :devices, :air_type, :monitor_value)");
        $stmt->bindValue(':user_no', $user_no);
        $stmt->bindValue(':devices', $device[0]);
        $stmt->bindValue(':typee', $device[1]);
        $stmt->bindValue(':air_type', $device[2]);
        $stmt->bindValue(':monitor_value', $device[3]);
        $isSuccess = $stmt->execute() && $isSuccess;
    }

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
