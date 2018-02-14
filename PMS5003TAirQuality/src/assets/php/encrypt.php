<?php 
//取得密鑰
$ehandle = fopen('key.pas', "r");
$key = '';
if ($ehandle) {
    $key= $key.fgets($ehandle, 20);
    fclose($ehandle);
}
$key = substr($key,0,-1);

/**
 * Encrypt a message
 *
 * @param string $message - message to encrypt
 * @param string $key - encryption key
 * @return string
 */
function encrypt($message, $key)
{
    $nonce = random_bytes(
        SODIUM_CRYPTO_SECRETBOX_NONCEBYTES
    );

    $cipher = base64_encode(
        $nonce.
        sodium_crypto_secretbox(
            $message,
            $nonce,
            $key
        )
    );
    sodium_memzero($message);
    sodium_memzero($key);
    return $cipher;
}

/**
 * Decrypt a message
 *
 * @param string $encrypted - message encrypted with safeEncrypt()
 * @param string $key - encryption key
 * @return string
 */
function decrypt($encrypted, $key)
{
    $decoded = base64_decode($encrypted);
    if ($decoded === false) {
        throw new Exception('Scream bloody murder, the encoding failed');
    }
    if (mb_strlen($decoded, '8bit') < (SODIUM_CRYPTO_SECRETBOX_NONCEBYTES + SODIUM_CRYPTO_SECRETBOX_MACBYTES)) {
        throw new Exception('Scream bloody murder, the message was truncated');
    }
    $nonce = mb_substr($decoded, 0, SODIUM_CRYPTO_SECRETBOX_NONCEBYTES, '8bit');
    $ciphertext = mb_substr($decoded, SODIUM_CRYPTO_SECRETBOX_NONCEBYTES, null, '8bit');

    $plain = sodium_crypto_secretbox_open(
        $ciphertext,
        $nonce,
        $key
    );
    if ($plain === false) {
        throw new Exception('the message was tampered with in transit');
    }
    sodium_memzero($ciphertext);
    sodium_memzero($key);
    return $plain;
}
//Mcrypt was DEPRECATED in PHP 7.1.0, and REMOVED in PHP 7.2.0.
//
//function encrypt($string,$key){
//    // 自帶的加密函數
//    $crypttext = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256, md5($key), $string, MCRYPT_MODE_CBC, md5(md5($key))));
//    return trim(safe_b64encode($crypttext));//對特殊字符進行處理
//}
//
//function decrypt($encrypted,$key){
//    $crypttexttb=safe_b64decode($encrypted);//對特殊字符解析
//    return rtrim(mcrypt_decrypt(MCRYPT_RIJNDAEL_256, md5($key), base64_decode($crypttexttb), MCRYPT_MODE_CBC, md5(md5($key))), "\0");//解密函數
//}
//
////處理特殊字符
//
//function safe_b64encode($string) {
//    $data = base64_encode($string);
//    $data = str_replace(array('+','/','='),array('-','_',''),$data);
//    return $data;
//}
//
////解析特殊字符
//
//function safe_b64decode($string) {
//    $data = str_replace(array('-','_'),array('+','/'),$string);
//    $mod4 = strlen($data) % 4;
//    if ($mod4) {
//        $data .= substr('====', $mod4);
//    }
//    return base64_decode($data);
//}

?>
