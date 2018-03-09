<?php
$key = random_bytes(SODIUM_CRYPTO_SECRETBOX_KEYBYTES);
$file = 'newkey.pas';
// Open the file to get existing content
// $current = file_get_contents($file);
// Append a new person to the file
// $current = $key;
// Write the contents back to the file
echo file_put_contents($file, $key);
?>
