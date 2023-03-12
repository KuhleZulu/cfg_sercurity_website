<?php
class Application
{
    private $conn;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function add(
        $applications
    ) {

        $query = "INSERT INTO applications(
            UserId,
            CareerId,
            Status,
            CreateById
        )
        VALUES (?,?,?,?)";
        try {
            $stmt = $this->conn->prepare($query);
            if ($stmt->execute(array(
                $applications->UserId,
                $applications->CareerId,
                $applications->Status,
                $applications->CreateById
                          ))) {
                $Id = $this->conn->lastInsertId();
                return $this->getById($Id);
            }
        } catch (Exception $e) {
            return array("ERROR", $e);
        }
    }

    public function update(
        $applications
    ){
        $query = "update applications set
        UserId = ?,
        CareerId = ?,
        Status = ?
        where ApplicatonId = ?
        ";
        try{
            $stmt = $this->conn->prepare($query);
            if ($stmt->execute(array(
                $applications->UserId,
                $applications->CareerId,
                $applications->Status,
                $applications->ApplicatonId
            ))) {
                return $this->getById($applications->ApplicatonId);
            }
        } catch (Exception $e) {
            return array("ERROR", $e);
        }
    }

    public function getAllapplications()
    {
        $query = "SELECT * FROM applications";
        $stmt = $this->conn->prepare($query);
        $stmt->execute(array());
        $results = array();
        if ($stmt->rowCount()){
            $items = $stmt->fetchAll(PDO::FETCH_ASSOC);
            foreach ($items as $item) {
                $item["User"] = $this->getUserById($item["UserId"]);
                $item["Career"] = $this->getJob($item["CareerId"]);
                array_push($results, $item);
            }
        }
        return $results;
    }
    public function getTop6applications()
    {
        $query = "SELECT * FROM applications order by CreatedDate DESC LIMIT 6
        ";
        $stmt = $this->conn->prepare($query);
        $stmt->execute(array());

        if ($stmt->rowCount()){
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
    }
    public function getUserById($id)
    {
        $query = "SELECT * FROM user where UserId = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->execute(array($id));

        if ($stmt->rowCount()){
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
    }
    public function getJob($id)
    {
        $query = "SELECT * FROM  careers where Career_id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->execute(array($id));

        if ($stmt->rowCount()){
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
    }


    public function delete($ApplicatonId){
        $query = "SELECT  FROM applications WHERE ApplicatonId =?";
        
        $stmt = $this->conn->prepare($query);
        $stmt->execute(array($ApplicatonId));

        if ($stmt->rowCount()) {
            return true;
        }
        return true;
    }

    public function getById($ApplicatonId){
        $query = "SELECT * FROM applications WHERE ApplicatonId =?";
        
        $stmt = $this->conn->prepare($query);
        $stmt->execute(array($ApplicatonId));

        if ($stmt->rowCount()) {
            $applications = $stmt->fetch(PDO::FETCH_ASSOC);
            return $applications;
        }
    }
}