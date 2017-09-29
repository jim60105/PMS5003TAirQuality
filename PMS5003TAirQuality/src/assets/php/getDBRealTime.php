<?php
include('setMySQL.php');
//include('encrypt.php');

$arr = array();
//查詢data queue
$db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname.';port='.$port,$dbuser,$dbpass);
$stmt = $db->prepare("SELECT * FROM (SELECT * FROM airDataQueue ORDER BY time DESC LIMIT 99999999999) t GROUP BY clientNum ORDER BY clientNum ASC");
$stmt->execute();
//查詢client數量
$stmt2 = $db->prepare("SELECT * FROM clientInfo");
$stmt2->execute();
//如果queue的資料沒有>client的數量，就到data裡面抓
if(($stmt->rowCount())<($stmt2->rowCount())) {
    $stmt3 = $db->prepare("SELECT * FROM (SELECT * FROM airData ORDER BY time DESC LIMIT 99999999999) t GROUP BY clientNum ORDER BY clientNum ASC");
    $stmt3->execute();
    //把data倒進去
    foreach($stmt3 as $row){
        array_push($arr,$row);
    }
}

//把queue的data倒進去
foreach($stmt as $row){
    array_push($arr,$row);
}
/*因為real-time.ts裡的寫法是，同clientNum後面的資料列會覆蓋前面的，所以不用做unique*/

//輸出
echo json_encode($arr);
?>
