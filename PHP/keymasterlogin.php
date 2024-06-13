<?php

function validate($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
$servername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "keymaster";
$tablename = "USER"; // Update table name to match your database table

if(!empty($_POST['email'])  && !empty($_POST['password'])){

        $email = validate($_POST['email']);
        $password = validate($_POST['password']);

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $reponce = ["Invalid email format"];
            echo json_encode($reponce);
        }else {
            try{
                $db = new PDO("mysql:host=$servername;dbname=$dbname", $dbusername, $dbpassword);
               $stm = $db->prepare("SELECT * FROM $tablename WHERE `EMAIL`=:email AND `password`=:password");
               $stm->bindParam(":email", $email);
                $stm->bindParam(":password", $password);
                $stm->execute();
    
                if($stm->rowCount() <= 0){
                    $reponce = ["Password or email incorrect"];
                    echo json_encode($reponce); 
                }else{
                    $user = $stm->fetch(PDO::FETCH_ASSOC);
                    $username = $user['username'];
                    $reponce = [ "msg"=>"true", "user"=>$username];
                    echo json_encode($reponce); 
                   
                }
                
            }catch(PDOException $e){
                echo $e->getMessage();
            }
        }
  
}else{
    $reponce = ["Please fill out all the fields!"];
    echo json_encode($reponce); 
    
}




