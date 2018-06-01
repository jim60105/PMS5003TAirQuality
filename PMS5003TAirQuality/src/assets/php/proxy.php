<?php
if (isset($_GET['url']) && !empty($_GET['url'])) {

// Create a stream
//    $opts = array(
//        'http' => array(
//            'method' => "GET",
//            'header' => "Accept-language: en\r\n"
////                "Cookie: foo=bar\r\n"
//        )
//    );
//
//    $context = stream_context_create($opts);
//
//// Open the file using the HTTP headers set above
//    $file = file_get_contents($_GET['url'], false, $context);
//    echo $file;

    //http://stackoverflow.com/a/12446906
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_URL, $_GET['url']);
    curl_setopt($ch, CURLOPT_REFERER, $_GET['url']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $result = curl_exec($ch);
    curl_close($ch);
    echo $result;
}
?>