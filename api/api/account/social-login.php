<?php
include_once '../../config/Database.php';
include_once '../../models/User.php';
include_once '../../models/Company.php';

$data = json_decode(file_get_contents("php://input"));

//connect to db
$database = new Database();
$db = $database->connect();

$user = new User($db);
$company = new Company($db);

$loginResults = $user->loginWithEmailOnly($data->Email);
if (isset($loginResults) && isset($loginResults['UserId'])) {
    echo  json_encode($loginResults);
    return true;
}


$data->CompanyId = '';
$UserId = $database->getGuid($db);
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

$errors = array();
if (!isset($result['UserId'])) {
    echo json_encode($result);
    return false;
}

if ($result) {
    echo json_encode($result);
} else {
    array_push($errors, 'User not created');
    echo json_encode($errors);
}
