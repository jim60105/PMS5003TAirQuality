<?php
include('setMySQL.php');
include('encrypt.php');

$email = isset($_POST['_e']) ? strip_tags($_POST['_e']) : '';
$type = isset($type) ? $type: (isset($_POST['type']) ? $_POST['type']:1);
$password = '';
$loginSuccess = false;
$displayNearest = 0;

if ($type == 1) {
    //Plain text login
    $password = isset($_POST['_p']) ? strip_tags($_POST["_p"]) : '';
    checkLogin(true);
} else if ($type == 2) {
    //Cookie login
    $password = isset($_POST['_p']) ? decrypt(strip_tags($_POST["_p"]), $key) : '';
    checkLogin(false);
}

function checkLogin($doEcho)
{

    //登入
    $db = new PDO('mysql:host=' . $GLOBALS['dbhost'] . ';dbname=' . $GLOBALS['dbname'], $GLOBALS['dbuser'], $GLOBALS['dbpass']);
    $db->query('set names utf8;');
    $stmt = $db->prepare("SELECT * FROM user WHERE email = :email;");
    $stmt->bindValue(':email', $GLOBALS['email']);
    $stmt->execute();
    $row = $stmt->fetch();

    if ($row != []) {

        if (password_verify($GLOBALS['password'], $row['password'])) {
            $GLOBALS['user_no'] = $row['no'];
            $row['_p'] = encrypt($GLOBALS['password'],$GLOBALS['key']);
            unset($row['password']);
            $row['_e'] = $row['email'];
            unset($row['email']);

            $GLOBALS['loginSuccess'] = true;
            $GLOBALS['displayNearest'] = $row['useNearest'];
        } else {
            //密碼錯誤
            $row['_e'] = $row['email'];
            unset($row['email']);
            unset($row['password']);

            $GLOBALS['loginSuccess'] = false;
            $GLOBALS['displayNearest'] = 0;
        }
    }

    if($doEcho){echo json_encode($row);}
}
?>
