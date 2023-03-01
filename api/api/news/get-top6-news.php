<?php
include_once '../../config/Database.php';
include_once '../../models/News.php';

$database = new Database();
$db = $database->connect();

$service = new News($db);

$result = $service->getTop6News();

echo json_encode($result);

