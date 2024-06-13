<?php

session_start();
$email = $_POST["email"];

function validate($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}


if(!empty($_POST['pass'])  && !empty($_POST['passConf'])){
    $pass = validate($_POST["pass"]);
    $passConf = validate($_POST["passConf"]);

    if(strlen($pass) < 8){
        echo "The password must be longer than 8 characters";
    }else if($pass !=  $passConf){
        echo "Passwords do not match";
    }else{
        try{

            $db= new PDO("mysql:host=localhost;dbname=keymaster", "root", "");
            $stm = $db->prepare("UPDATE `user` SET `password`=:password WHERE `email` = :email");
            $stm->bindParam(":password", $pass);
            $stm->bindParam(":email", $email);
            $stm->execute();
            echo "true";
        }catch(PDOException $e){
            echo $e->getMessage();
        }
    }

}else{
    echo "Please fill out this field";
}
?>