<?php
include_once '../../config/Database.php';
include_once '../../models/Account.php';

$data = json_decode(file_get_contents("php://input"));

$Email = $data->Email;

//connect to db
$database = new Database();
$db = $database->connect();

$account = new Account($db);

$result = $account->GenerateToken($Email);

echo json_encode($result);
