<?php
include_once '../../config/Database.php';

$database = new Database();
$db = $database->connect();

$service = new User ($db);

$result = $service->getUserByEmail($_GET['$Email']);

echo json_encode($result);