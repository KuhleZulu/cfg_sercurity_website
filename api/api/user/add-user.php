<?php

include_once '../../config/Database.php';
include_once '../../models/User.php';

$data = json_decode(file_get_contents("php://input"));

$database = new Database();
$db = $database->connect();
$user = new User($db);
$result = $user->add(
    $data->CompanyId,
    $data->UserType,
    $data->Name,
    $data->Surname,
    $data->Email,
    $data->PhoneNumber,
    $data->Password,
    $data->Dp,
    $data->AddressLineHome,
    $data->AddressUrlHome,
    $data->AddressLineWork,
    $data->AddressUrlWork,
    $data->CreateUserId,
    $data->ModifyUserId,
    $data->StatusId
);

echo json_encode($result);
