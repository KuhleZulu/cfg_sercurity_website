<?php
class User
{
    //DB Stuff
    private $conn;


    public function __construct($db)
    {
        $this->conn = $db;
    }

    //Add user
    public function add(
        $CompanyId,
        $UserType,
        $Name,
        $Surname,
        $Email,
        $PhoneNumber,
        $Password,
        $Dp,
        $AddressLineHome,
        $AddressUrlHome,
        $AddressLineWork,
        $AddressUrlWork,
        $CreateUserId,
        $ModifyUserId,
        $StatusId
    ) {
        if ($this->getByEmail($Email) > 0) {
            return "user already exists";
        }
        $UserId = $this->getUuid($this->conn);
        $UserToken = bin2hex(openssl_random_pseudo_bytes(16));

        $query = "INSERT INTO user(
            UserId,
            CompanyId,
            UserType,
            Name,
            Surname,
            Email,
            PhoneNumber,
            Password,
            Dp,
            AddressLineHome,
            AddressUrlHome,
            AddressLineWork,
            AddressUrlWork,
            CreateUserId,
            ModifyUserId,
            StatusId,
            UserToken
            )
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        try {
            $stmt = $this->conn->prepare($query);
            if ($stmt->execute(array(
                $UserId,
                $CompanyId,
                $UserType,
                $Name,
                $Surname,
                $Email,
                $PhoneNumber,
                $Password,
                $Dp,
                $AddressLineHome,
                $AddressUrlHome,
                $AddressLineWork,
                $AddressUrlWork,
                $CreateUserId,
                $ModifyUserId,
                $StatusId,
                $UserToken
            ))) {
                return $this->getUserById($UserId);
            }
        } catch (Exception $e) {
            return array("ERROR", $e);
        }
    }

    function getUuid($conn){
    $stmt = $conn->prepare("SELECT uuid() as Id from dual");
    $stmt->execute(array());

    if ($stmt->rowCount()){
        $uuid = $stmt->fetch(PDO::FETCH_ASSOC);
        return $uuid['Id'];
    }
}
    public function getUserByEmailandPassword($email, $password)
    {
        $query = "SELECT  * FROM user WHERE Email =  ? AND BINARY Password = ?";

        $stmt = $this->conn->prepare($query);
        $stmt->execute(array($email, $password));

        if ($stmt->rowCount()) {
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            //$result["Password"] = "***********";
                  return $result;
        } else {
            return 'Invalid Request';
        }
    }

    
    public function loginWithEmailOnly($email)
    {
        $query = "SELECT  * FROM user WHERE Email =  ?";

        $stmt = $this->conn->prepare($query);
        $stmt->execute(array($email));
        if ($stmt->rowCount()) {
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
           
            return $result;
        } else {
            return 'Invalid Request';
        }
    }

    public function getUserByEmail($email)
    {
        $query = "SELECT  * FROM users WHERE Email =  ?";

        $stmt = $this->conn->prepare($query);
        $stmt->execute(array($email));

        if ($stmt->rowCount()) {
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
    }


    public function Update(
        $UserId,
        $CompanyId,
        $UserType,
        $Name,
        $Surname,
        $Email,
        $PhoneNumber,
        $Password,
        $Dp,
        $AddressLineHome,
        $AddressUrlHome,
        $AddressLineWork,
        $AddressUrlWork,
        $CreateUserId,
        $ModifyUserId,
        $StatusId,
        $UserToken
    ) {
        $query = "UPDATE
        user
    SET
    CompanyId = ?,
    UserType = ?,
    Name = ?,
    Surname = ?,
    Email = ?,
    PhoneNumber = ?,
    Password = ?,
    Dp = ?,
    AddressLineHome= ?,
    AddressUrlHome= ?,
    AddressLineWork= ?,
    AddressUrlWork= ?,
    CreateUserId = ?,
    ModifyUserId = ?,
    StatusId = ?,
    UserToken = ?,
    ModifyDate = NOW()
    WHERE
    UserId = ?
         ";

        try {
            $stmt = $this->conn->prepare($query);
            if ($stmt->execute(array(
                $CompanyId,
                $UserType,
                $Name,
                $Surname,
                $Email,
                $PhoneNumber,
                $Password,
                $Dp,
                $AddressLineHome,
                $AddressUrlHome,
                $AddressLineWork,
                $AddressUrlWork,
                $CreateUserId,
                $ModifyUserId,
                $StatusId,
                $UserToken,
                $UserId

            ))) {
                $this->deleteStatus99();
                return $this->getUserById($UserId);
            }
        } catch (Exception $e) {
            return array("ERROR", $e);
        }
    }

    public function deleteStatus99()
    {
        # code...
        $query = "DELETE FROM user WHERE StatusId= ?";
        try {
            //code...
            $stmt = $this->conn->prepare($query);
            $stmt->execute(array(99));
            if ($stmt->rowCount()) {
                return $stmt->fetch(PDO::FETCH_ASSOC);
            }
        } catch (Exception $e) {
            return array("ERROR", $e);
        }
    }

    public function getUserById($UserId)
    {
        if(!isset($UserId)){
            return null;
        }
        $query = "SELECT * FROM user WHERE UserId =?";

        $stmt = $this->conn->prepare($query);
        $stmt->execute(array($UserId));

        if ($stmt->rowCount()) {
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
    }


    public function getByEmail($Email)
    {
        $query = "SELECT * FROM user WHERE Email =?";

        $stmt = $this->conn->prepare($query);
        $stmt->execute(array($Email));

        if ($stmt->rowCount()) {
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
    }



    public function getUsers($StatusId)
    {
        $query = "SELECT * FROM user WHERE StatusId = ? ORDER BY CreateDate DESC";

        try {
            $stmt = $this->conn->prepare($query);
            $stmt->execute(array($StatusId));
            if ($stmt->rowCount()) {
                return $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            return array();
        } catch (Exception $e) {
            return array("ERROR", $e);
        }
    }


    public function getUser($UserId)
    {
        $query = "SELECT * FROM user WHERE  UserId=?";
        try {
            $stmt = $this->conn->prepare($query);
            $stmt->execute(array($UserId));



            if ($stmt->rowCount()) {
                $item = $stmt->fetch(PDO::FETCH_ASSOC);
                return $item;
            }
        } catch (Exception $e) {
            return array("ERROR", $e);
        }
    }

    public function GetByToken($UserToken)
    {
        $query = "SELECT * FROM user WHERE UserToken =?";
        $stmt = $this->conn->prepare($query);

        $stmt->execute(array($UserToken));

        if ($stmt->rowCount()) {
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            $user["Password"] = null;
            return $user;
        }
    }

    public function getCustomers($CompanyId, $UserType)
    {
        $query = "SELECT * FROM user WHERE  CompanyId=? AND UserType = ? ORDER BY ModifyDate DESC";

        try {
            $stmt = $this->conn->prepare($query);
            $stmt->execute(array($CompanyId, $UserType));

            $users = array();

            if ($stmt->rowCount()) {
                $items = $stmt->fetchAll(PDO::FETCH_ASSOC);
                foreach ($items as $item) {
                    array_push($users, $item);
                }
            }
            return $users;
        } catch (Exception $e) {
            return array("ERROR", $e);
        }
    }


    public function getAllUsers()
    {
        $query = "SELECT * FROM user  ORDER BY CreateDate DESC";

        try {
            $stmt = $this->conn->prepare($query);
            $stmt->execute(array());

            $users = array();

            if ($stmt->rowCount()) {
                $items = $stmt->fetchAll(PDO::FETCH_ASSOC);
                foreach ($items as $item) {
                    array_push($users, $item);
                }
            }
            return $users;
        } catch (Exception $e) {
            return array("ERROR", $e);
        }
    }


}
