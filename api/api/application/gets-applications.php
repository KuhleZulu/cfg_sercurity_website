<?php
include_once '../../config/Database.php';
include_once '../../models/Application.php';

$database = new Database();
$db = $database->connect();

$service = new Application($db);

$result = $service->getAllapplications();

echo json_encode($result);

