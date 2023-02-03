<?php
class News
{
    private $conn;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function add(
        $news
    ) {

        $query = "INSERT INTO news(
            Title,
            Body,
            ImageUrl,
            CreateById,
            Status
        )
        VALUES (?,?,?,?,?)";
        try {
            $stmt = $this->conn->prepare($query);
            if ($stmt->execute(array(
                $news->Title,
                $news->Body,
                $news->ImageUrl,
                $news->CreateById,
                $news->Status
            ))) {
                $Id = $this->conn->lastInsertId();
                return $this->getById($Id);
            }
        } catch (Exception $e) {
            return array("ERROR", $e);
        }
    }

    public function update(
        $news
    ){
        $query = "update user set
        Name = ?
        Email = ?
        Status = ?
        Role = ?
        ParentId = ?
        ImageUrl = ?
        where UserId = ?
        ";
        try{
            $stmt = $this->conn->prepare($query);
            if ($stmt->execute(array(
                $news->Name,
                $news->Email,
                $news->Status,
                $news->Role,
                $news->ParentId,
                $news->ImageUrl,
                $news->UserId
            ))) {
                return $this->getById($news->UserId);
            }
        } catch (Exception $e) {
            return array("ERROR", $e);
        }
    }

    public function getAllNews()
    {
        $query = "SELECT * FROM news";
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
        $query = "SELECT * FROM news WHERE NewsId =?";
        
        $stmt = $this->conn->prepare($query);
        $stmt->execute(array($NewsId));

        if ($stmt->rowCount()) {
            $news = $stmt->fetch(PDO::FETCH_ASSOC);
            return $news;
        }
    }
}