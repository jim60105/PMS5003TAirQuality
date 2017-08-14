<?php
    include('setMySQL.php');
    //include('encrypt.php');

    $pm1= $_GET["pm1"];
    $pm10= $_GET["pm10"];
    $pm25= $_GET["pm25"];
    $temp = $_GET["temp"];
    $humid = $_GET["humid"];
    $clientNum = $_GET["clientNum"];

    $db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname.';port='.$port,$dbuser,$dbpass);
    $stmt = $db->prepare("INSERT INTO test (no, time, pm1, pm10, pm25, temp, humid, clientNum) VALUES (NULL, CURRENT_TIMESTAMP, :pm1, :pm10, :pm25, :temp, :humid, :clientNum);");
    $stmt->bindValue(':pm1',$pm1);
    $stmt->bindValue(':pm10',$pm10);
    $stmt->bindValue(':pm25',$pm25);
    $stmt->bindValue(':temp',$temp);
    $stmt->bindValue(':humid',$humid);
    $stmt->bindValue(':clientNum',$clientNum);
    $stmt->execute();
?>

