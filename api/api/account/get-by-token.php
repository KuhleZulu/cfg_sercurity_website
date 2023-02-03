<?php
include_once '../../config/Database.php';
include_once '../../models/User.php';

$data = json_decode(file_get_contents("php://input"));

 $Token = $data->Token; 
 $database = new Database();
 $db = $database->connect();
 
 $user = new User($db);
  
 $result = $user->GetByToken($Token);

 echo json_encode($result);
