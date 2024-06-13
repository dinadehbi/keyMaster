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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(!empty($_POST['username']) && !empty($_POST['emeil']) && !empty($_POST['password']) && !empty($_POST['passwrod-conf'])){
        $username = validate($_POST['username']);
        $email = validate($_POST['emeil']);
        $password = validate($_POST['password']);
        $confirmPassword = validate($_POST['passwrod-conf']);

        if (strlen($password) < 8) {
            $reponce = ["* Password must be at least 8 characters long"];
            echo json_encode($reponce); 
        } else if ($password != $confirmPassword) {
            $reponce = ["* Passwords do not match"];
            echo json_encode($reponce); 
        } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $reponce = ["* Invalid email format"];
            echo json_encode($reponce); 
        } else {
            try {
                $db = new PDO("mysql:host=$servername;dbname=$dbname", $dbusername, $dbpassword);
                $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                // Check if the email already exists
                $stm = $db->prepare("SELECT * FROM $tablename WHERE email=:email");
                $stm->bindParam(":email", $email);
                $stm->execute();

                if ($stm->rowCount() > 0) {
                    $reponce = ["The Email already exists"];
                    echo json_encode($reponce); 
                } else {
                    // Hash the password before storing it

                    // Insert the new user
                    $stm = $db->prepare("INSERT INTO $tablename (username, email, password) VALUES(:username, :email, :password)");
                    $stm->bindParam(":username", $username);
                    $stm->bindParam(":email", $email);
                    $stm->bindParam(":password", $password);
                    $stm->execute();
 
                    $reponce = ["true", $username];
                    echo json_encode($reponce);              
                }
            } catch (PDOException $e) {
                echo "Error: " . $e->getMessage();
            }
        }
    }else{
        $reponce = ["Please fill out all the fields!"];
        echo json_encode($reponce); 
    }
}





?>
