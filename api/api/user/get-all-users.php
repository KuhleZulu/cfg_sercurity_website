<?php
include_once '../../config/Database.php';
include_once '../../models/User.php';

$data = json_decode(file_get_contents("php://input"));

//connect to db
$database = new Database();
$db = $database->connect();

$users = new User($db);

$result = $users->getAllUsers();

echo json_encode($result);
