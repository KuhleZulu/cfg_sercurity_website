<?php
include_once '../../config/Database.php';
include_once '../../models/Career.php';

$database = new Database();
$db = $database->connect();

$service = new careers($db);

$result = $service->getAllNews();

echo json_encode($result);