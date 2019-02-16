<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");
require_once 'connection.php';

$link = @mysqli_connect($host, $client, $password, $database)
or die("Ошибка соединения с БД" . mysqli_error($link));
mysqli_set_charset($link,"utf8") or die("Не установлена кодировка");

$userNew = json_decode(file_get_contents('php://input'), true);
$db = 'users';
if(isset($userNew['email']) && isset($userNew['password'])&& isset($userNew['firstName'])&& isset($userNew['lastName'])&& isset($userNew['phone'])&& isset($userNew['country'])&& isset($userNew['city'])){

    $email = $userNew['email'];
    $password = $userNew['password'];
    $firstName = $userNew['firstName'];
    $lastName = $userNew['lastName'];
    $phone = $userNew['phone'];
    $country = $userNew['country'];
    $city = $userNew['city'];
    $query =("INSERT INTO ".$db." (firstName, lastName, email, password, country, city, phone) VALUES ('$firstName','$lastName','$email', '".md5 ("$password")."','$country','$city','$phone')");
    $result = mysqli_query($link, $query)
    or die("Ошибка" . mysqli_error($link));
}
else {
    die("Error" . mysqli_error($link));
}
mysqli_close($link);
?>
