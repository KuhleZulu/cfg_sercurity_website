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
        $query = "update news set
        Title = ?,
        Body = ?,
        ImageUrl = ?
        where NewsId = ?
        ";
        try{
            $stmt = $this->conn->prepare($query);
            if ($stmt->execute(array(
                $news->Title,
                $news->Body,
                $news->ImageUrl,
                $news->NewsId
            ))) {
                return $this->getById($news->NewsId);
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
    public function getTop6News()
    {
        $query = "SELECT * FROM news order by CreatedDate DESC LIMIT 6
        ";
        $stmt = $this->conn->prepare($query);
        $stmt->execute(array());

        if ($stmt->rowCount()){
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
    }


    public function delete($NewsId){
        $query = "SELECT  FROM news WHERE NewsId =?";
        
        $stmt = $this->conn->prepare($query);
        $stmt->execute(array($NewsId));

        if ($stmt->rowCount()) {
            return true;
        }
        return true;
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