<?php
include_once '../../config/Database.php';
include_once '../../models/Career.php';

$data = json_decode(file_get_contents("php://input"));

$database = new Database();
$db = $database->connect();

$service = new Careers($db);

$result = $service->update($data);

echo json_encode($result);