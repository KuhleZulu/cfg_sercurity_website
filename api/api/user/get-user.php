<?php
include_once '../../config/Database.php';
include_once '../../models/User.php';

$data = json_decode(file_get_contents("php://input"));

 $StatusId = 1;
 $UserId = $_GET['UserId'];

//connect to db
$database = new Database();
$db = $database->connect();

$users = new User($db);

$result = $users->getUser($UserId);

echo json_encode($result);
