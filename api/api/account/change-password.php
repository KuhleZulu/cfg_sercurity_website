<?php
include_once '../../config/Database.php';
include_once '../../models/Account.php';

$data = json_decode(file_get_contents("php://input"));

$Email = $data->Email;
$Password = $data->Password;

//connect to db
$database = new Database();
$db = $database->connect();

$account = new Account($db);

$result = $account->UpdatePassword($Email, $Password);

echo json_encode($result);
