<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");
require_once 'connection.php';

$link = @mysqli_connect($host, $client, $password, $database)
or die("Ошибка соединения с БД" . mysqli_error($link));
mysqli_set_charset($link,"utf8") or die("Не установлена кодировка");

$userAcc = json_decode(file_get_contents('php://input'), true);
$db = 'users';
if(isset($userAcc['email'])) {
    $email = $userAcc['email'];
    $query = ("DELETE FROM  " . $db . " WHERE email='$email' ");
    $result = mysqli_query($link, $query)
    or die("Ошибка " . mysqli_error($link));
}
else {
    die("Err" . mysqli_error($link));
}
mysqli_close($link);
?>