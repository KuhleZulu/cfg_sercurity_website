<?php
include_once '../../config/Database.php';
include_once '../../models/Career.php';

$data = json_decode(file_get_contents("php://input"));

$database = new Database();
$db = $database->connect();

$service = new careers($db);

$result = $service->add($data);

echo json_encode($result);