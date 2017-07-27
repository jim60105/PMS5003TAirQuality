<?php
$handle = fopen('dbpassword.pas', "r");
$contents = '';
if ($handle) {
    $contents= $contents.fgets($handle, 20);
    fclose($handle);
}

$dbhost = '127.0.0.1';
$dbuser = 'air';
$dbpass = substr($contents,0,-1);
$dbname = 'air';
?>
