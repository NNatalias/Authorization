<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");
require_once 'connection.php';

$link = @mysqli_connect($host, $client, $password, $database)
or die("Ошибка соединения с БД" . mysqli_error($link));
mysqli_set_charset($link,"utf8") or die("Не установлена кодировка");

$user = json_decode(file_get_contents('php://input'), true);
$db = 'users';
if(isset($user['email']) && isset($user['password'])) {
    $email = $user['email'];
    $password = md5($user['password']);

    $query = ("SELECT * FROM  " . $db . " WHERE email='$email' AND password='$password'  ");
    $result = mysqli_query($link, $query)
    or die("Ошибка " . mysqli_error($link));
    $user = $result->fetch_assoc();
    if($user != 0){
        echo json_encode($user);
    }
    else{
        print 0;
    }
}
else {
    die("Err" . mysqli_error($link));
}
mysqli_close($link);
?>