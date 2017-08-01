<?php 
//取得密鑰
$ehandle = fopen('key.pas', "r");
$key = '';
if ($ehandle) {
    $key= $key.fgets($ehandle, 20);
    fclose($ehandle);
}
$key = substr($key,0,-1);

function encrypt($string,$key){
    // 自帶的加密函數
    $crypttext = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256, md5($key), $string, MCRYPT_MODE_CBC, md5(md5($key))));
    return trim(safe_b64encode($crypttext));//對特殊字符進行處理
}

function decrypt($encrypted,$key){
    $crypttexttb=safe_b64decode($encrypted);//對特殊字符解析
    return rtrim(mcrypt_decrypt(MCRYPT_RIJNDAEL_256, md5($key), base64_decode($crypttexttb), MCRYPT_MODE_CBC, md5(md5($key))), "\0");//解密函數
}

//處理特殊字符

function safe_b64encode($string) {
    $data = base64_encode($string);
    $data = str_replace(array('+','/','='),array('-','_',''),$data);
    return $data;
}

//解析特殊字符

function safe_b64decode($string) {
    $data = str_replace(array('-','_'),array('+','/'),$string);
    $mod4 = strlen($data) % 4;
    if ($mod4) {
        $data .= substr('====', $mod4);
    }
    return base64_decode($data);
}

?>
