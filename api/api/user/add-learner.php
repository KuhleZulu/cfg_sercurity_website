<?php
include_once '../../config/Database.php';
include_once '../../models/Account.php';
include_once '../../models/User.php';
include_once '../../models/Roles.php';
include_once '../../models/Studentsubject.php';


$data = json_decode(file_get_contents("php://input"));

$CompanyId = $data->CompanyId;
$Name = $data->Name;
$Surname = $data->Surname;
$GradeId = $data->GradeId;
$Email = $data->Email;
$PhoneNumber = $data->PhoneNumber;
$Password = $data->Password;
$UserType = $data->UserType;
$CreateUserId = $data->CreateUserId;
$ModifyUserId = $data->ModifyUserId;
$StatusId = $data->StatusId;
$Roles = $data->Roles;
$Studentsubjects = $data->Studentsubjects;


//connect to db
$database = new Database();
$db = $database->connect();

$user = new User($db);
$rolesService = new Roles($db);
$userRolesService = new UserRoles($db);
$studentsubject = new Studentsubject($db);

$UserId = $database->getGuid($db);
$result = $user->add(
    $UserId,
    $CompanyId,
    $UserType,
    $Name,
    $Surname,
    $GradeId,
    $Email,
    $PhoneNumber,
    $Password,
    $CreateUserId,
    $ModifyUserId,
    $StatusId
);

$errors = array();
if (!isset($result['UserId'])) {
    echo json_encode($result);
    return false;
}

if ($result) {
    if (isset($Roles)) {
        $addedRoles = array();
        foreach ($Roles as $role) {
            $roleResult = $rolesService->GetByName($role->Name);
            $roleId = $roleResult['RoleId'];
            $userId = $result['UserId'];
            $userRoleResults = $userRolesService->Create(
                $userId,
                $roleId,
                0,
                $userId,
                $userId,
                1
            );
            foreach ($userRoleResults as $roleObj) {
                # code...
                array_push($addedRoles, $roleObj);
            }
        }
        $result['Roles'] = $addedRoles;
    }

    $addedSubjects = array();
    if (isset($Studentsubjects)) {
        $userId = $result['UserId'];

        foreach ($Studentsubjects as $item) {
            $added = $studentsubject->add(
                $userId,
                $item->SubjectId,
                $result['UserId'],
                $result['UserId'],
                1
            );

            array_push($addedSubjects, $added);
        }

        $result['Subjects'] = $addedSubjects;
    }

    echo json_encode($result);
} else {
    array_push($errors, 'User not created');
    echo json_encode($errors);
}
