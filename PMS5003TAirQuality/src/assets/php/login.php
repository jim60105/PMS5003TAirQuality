<?php
include('encrypt.php');
include('setMySQL.php');

$email = isset($_POST['_e']) ? strip_tags($_POST['_e']) : '';
$type = isset($type) ? $type: (isset($_POST['type']) ? $_POST['type']:1);
$password = '';
$loginSuccess = false;
$displayNearest = 0;

if ($type == 1) {
    //Plain text login
    $password = isset($_POST['_p']) ? encrypt(strip_tags($_POST["_p"]), $key) : '';
    checkLogin(true);
} else if ($type == 2) {
    //Cookie login
    $password = isset($_POST['_p']) ? strip_tags($_POST["_p"]) : '';
    checkLogin(false);
}

function checkLogin($doEcho)
{
//登入
    $db = new PDO('mysql:host=' . $GLOBALS['dbhost'] . ';dbname=' . $GLOBALS['dbname'], $GLOBALS['dbuser'], $GLOBALS['dbpass']);
    $db->query('set names utf8;');
    $stmt = $db->prepare("SELECT * FROM user WHERE email = :email && password = :password ;");
    $stmt->bindValue(':email', $GLOBALS['email']);
    $stmt->bindValue(':password', $GLOBALS['password']);
    $stmt->execute();
    $row = $stmt->fetch();
    if ($row != []) {
        $GLOBALS['user_no'] = $row['no'];
        $row['_p'] = $row['password'];
        unset($row['password']);
        $row['_e'] = $row['email'];
        unset($row['email']);
    } else {
        $stmt = $db->prepare("SELECT email FROM user WHERE email = :email ;");
        $stmt->bindValue(':email', $GLOBALS['email']);
        $stmt->execute();
        $row = $stmt->fetch();
        if ($row != []) {
            $row['_e'] = $row['email'];
            unset($row['email']);
        }
    }

    if($doEcho){echo json_encode($row);}
    $GLOBALS['loginSuccess'] = true;
    $GLOBALS['displayNearest'] = $row['useNearest'];
}
?>
