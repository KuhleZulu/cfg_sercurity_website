<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header('Content-Type: application/json');


class Database
{
    public function connect()
    {
        $conn = null;
        try{
            $conn = new PDO('mysql:host=localhost;dbname=cfgsecur_website', 'cfgsecur_website', 'design@uniquecommunications.co.za');
          
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e){
            echo json_encode($e->getMessage());
        }
        return $conn;
    }
    public function getGuid($conn)
    {
        $stmt = $conn->prepare("SELECT uuid() as ID from dual");
        $stmt->execute(array());

        if ($stmt->rowcount()) {
            $uuid = $stmt->fetch(PDO::FETCH_ASSOC);
            return $uuid['ID'];
        }
    }
}