<?php
include_once '../../config/Database.php';
include_once '../../models/Account.php';


$data = json_decode(file_get_contents("php://input"));

$Token = $data->Token;

$database = new Database();
$db = $database->connect();

$account = new Account($db);

$result = $account->ActivateAccount($Token);

echo json_encode($result);
