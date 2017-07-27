<?php
    include('setMySQL.php');
    include('encrypt.php');

    $pm1= $_POST["pm1"];
    $pm10= $_POST["pm10"];
    $pm25= $_POST["pm25"];
    $temp = $_POST["temp"];
    $humid = $_POST["humid"];

    $db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname,$dbuser,$dbpass);
    //將庫存減去用戶購物車內數量
    $stmt = $db->prepare("INSERT INTO test (no, time, pm1, pm10, pm25, temp, humid) VALUES (NULL, CURRENT_TIMESTAMP, :pm1, :pm10, :pm25, :temp, :humid);");
    $stmt->bindValue(':pm1',$pm1);
    $stmt->bindValue(':pm10',$pm10);
    $stmt->bindValue(':pm25',$pm25);
    $stmt->bindValue(':temp',$temp);
    $stmt->bindValue(':humid',$humid);
    $stmt->execute();
?>

