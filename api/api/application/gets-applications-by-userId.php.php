<?php
include_once '../../config/Database.php';
include_once '../../models/Application.php';

$database = new Database();
$db = $database->connect();

$service = new Application($db);

$result = $service->getAllapplicationsByUserId($_GET['UserId']);

echo json_encode($result);

