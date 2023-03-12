<?php
include_once '../../config/Database.php';
include_once '../../models/Application.php';

$data = json_decode(file_get_contents("php://input"));

$database = new Database();
$db = $database->connect();

$service = new Application($db);
if($data->ApplicatonId  == 0 || $data->ApplicatonId  == '0'){
    $result = $service->add($data);
}else{
    $result = $service->update($data);  
}

echo json_encode($result);


