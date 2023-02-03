<?php
include_once '../../config/Database.php';
include_once '../../models/User.php';

$data = json_decode(file_get_contents("php://input"));

 $StatusId = 1;
 $CompanyId = $_GET['CompanyId'];
 $UserType = $_GET['UserType'];

//connect to db
$database = new Database();
$db = $database->connect();

$users = new User($db);

$result = $users->getCustomers($CompanyId, $UserType);

echo json_encode($result);
