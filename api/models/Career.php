<?php
class Careers
{
    private $conn;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function add(
        $careers
    ) {

        $query = "INSERT INTO careers(
            Title,
            Posted_by_id,
            Career_type,
            Closing_date,
            Career_description,
            Is_active,
            Street_address,
            City,
            State,
            Country,
            Zip
        )
        VALUES (?,?,?,?,?,?,?,?,?,?,?)";
        try {
            $stmt = $this->conn->prepare($query);
            if ($stmt->execute(array(
                $careers->Title,
                $careers->Posted_by_id,
                $careers->Career_type,
                $careers->Closing_date,
                $careers->Career_description,
                $careers->Is_active,
                $careers->Street_address,
                $careers->City,
                $careers->State,
                $careers->Country,
                $careers->Zip
            ))) {
                $Id = $this->conn->lastInsertId();
                return $this->getById($Id);
            }
        } catch (Exception $e) {
            return array("ERROR", $e);
        }
    }

    public function update(
        $careers
    ){
        $query = "update careers set
        Title = ?,
        Posted_by_id = ?,
        Career_type = ?,
        Created_date = ?,
        Closing_date = ?,
        Career_description = ?,
        Is_active = ?,
        Street_address = ?,
        City = ?,
        State = ?,
        Country = ?,
        Zip = ?
        where Career_id = ?
        ";
        try{
            $stmt = $this->conn->prepare($query);
            if ($stmt->execute(array(
                $careers->Title,
                $careers->Posted_by_id,
                $careers->Career_type,
                $careers->Created_date,
                $careers->Closing_date,
                $careers->Career_description,
                $careers->Is_active,
                $careers->Street_address,
                $careers->City,
                $careers->State,
                $careers->Country,
                $careers->Zip,
                $careers->Career_id
            ))) {
                return $this->getById($careers->Career_id);
            }
        } catch (Exception $e) {
            return array("ERROR", $e);
        }
    }

    public function getAllNews()
    {
        $query = "SELECT * FROM careers";
        $stmt = $this->conn->prepare($query);
        $stmt->execute(array());

        if ($stmt->rowCount()){
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
    }

    public function getByEmail($Email)
    {
        $query = "SELECT * FROM user WHERE Email =?";
        $stmt = $this->conn->prepare($query);
        $stmt->execute(array($Email));

        if ($stmt->rowCount()){
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
    }

    public function login($Email, $Password)
    {
        $query = "SELECT * FROM user WHERE Email =? and BINARY Password =?";
        $stmt = $this->conn->prepare($query);
        $stmt->execute(array($Email,$Password));

        if ($stmt->rowCount()){
            $news = $stmt->fetch(PDO::FETCH_ASSOC);
            $news["Password"] = "************";
            return $news;
        }
    }

    public function getById($NewsId){
        $query = "SELECT * FROM careers WHERE Career_id =?";
        
        $stmt = $this->conn->prepare($query);
        $stmt->execute(array($NewsId));

        if ($stmt->rowCount()) {
            $news = $stmt->fetch(PDO::FETCH_ASSOC);
            return $news;
        }
    }
    public function runAnyQuery( $query){        
        $stmt = $this->conn->prepare($query);
        $stmt->execute(array());

        if ($stmt->rowCount()) {
            $reponse = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $reponse;
        }
    }
}