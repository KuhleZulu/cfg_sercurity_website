<?php

include_once '../../config/Database.php';
include_once '../../models/User.php';
include_once '../../models/Company.php';

$data = json_decode(file_get_contents("php://input"));

$UserId = $data->UserId;
$CompanyId = $data->CompanyId;
$UserType = $data->UserType;
$Name = $data->Name;
$Slug = $data->Slug;
$Surname = $data->Surname;
$Email = $data->Email;
$PhoneNumber = $data->PhoneNumber;
$Password = $data->Password;
$Dp = $data->Dp;
$CompanyDp = $data->CompanyDp;
$CreateUserId = $data->CreateUserId;
$ModifyUserId = $data->ModifyUserId;
$StatusId = $data->StatusId;
$CompanyName = $data->CompanyName;


$database = new Database();
$db = $database->connect();
$user = new User($db);
$company = new Company($db);

$CompanyId = getUuid($db);
$companyResult = $company->Create(
    $CompanyId,
    $CompanyName,
    $Slug,
    $CompanyDp,
    "Fashion",
    0,
    $CreateUserId,
    $ModifyUserId,
    $StatusId
);

if (!isset($companyResult['CompanyId'])) {
    echo json_encode($companyResult);
    return false;
}

$result = $user->add(
    $CompanyId,
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

$result = $user->getUserByEmailandPassword($Email, $Password);

echo json_encode($result);
