<?php
include('setMySQL.php');
//include('encrypt.php');
if(isset($_GET["time"])) {
    $time = $_GET["time"];
    $realTime = false;
}else{
    $realTime = true;
    $time = date("Y-m-d H:i:s");
}

$arr = array();
$db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname.';port='.$port,$dbuser,$dbpass);

//查詢data queue
if($realTime) {
    $stmt = $db->prepare("
        SELECT * FROM airdataqueue as t 
        INNER JOIN (
            SELECT airdataqueue.clientNum as clientNum2, MAX(airdataqueue.time) as max_time 
            FROM airdataqueue 
            GROUP BY airdataqueue.clientNum
        ) as group_table
        ON t.clientNum = group_table.clientNum2 and t.time = group_table.max_time
    ");
    //This is not working since MySQL 5.7.5 due to the setting sql_mode=only_full_group_by.
    //https://stackoverflow.com/questions/34115174/error-related-to-only-full-group-by-when-executing-a-query-in-mysql
    //$stmt = $db->prepare("SELECT * FROM (SELECT * FROM airdataqueue ORDER BY time DESC LIMIT 99999999999) t GROUP BY clientNum ORDER BY clientNum ASC");
    $stmt->execute();
    foreach($stmt as $row){
        array_push($arr,$row);
    }
}
//查詢client數量
$stmt2 = $db->prepare("SELECT * FROM clientinfo");
$stmt2->execute();
//如果arr的資料沒有>client的數量，就到data裡面抓
if(count($arr)<($stmt2->rowCount())) {
    $stmt3 = $db->prepare("
        SELECT * FROM airdata as t 
        INNER JOIN (
            SELECT airdata.clientNum as clientNum2, MAX(airdata.time) as max_time 
            FROM airdata 
            WHERE airdata.time < :timee 
            GROUP BY airdata.clientNum
        ) as group_table
        ON t.clientNum = group_table.clientNum2 and t.time = group_table.max_time
    ");
    //For the same reason as above.
    //$stmt3 = $db->prepare("SELECT * FROM (SELECT * FROM airdata ORDER BY time DESC LIMIT 99999999999) t WHERE time < :timee GROUP BY clientNum ORDER BY clientNum ASC");
    $stmt3->bindValue(':timee',$time);
    $stmt3->execute();
    //把data倒進去
    foreach($stmt3 as $row){
        array_push($arr,$row);
    }
}

//輸出
echo json_encode($arr);
?>
