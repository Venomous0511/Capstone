<?php
    include 'connection.php';

    if (!isset($_POST['username'], $_POST['password'])) {
        exit("Please fill up all the fields!");
    }

    // CHECK IF FORM IS SUBMITTED
    if($stmt = $conn->prepare('SELECT id, password FROM admin_login WHERE username = ?')) {
        $stmt->bind_param('s', $_POST['username']);
        $stmt->execute();

        $stmt->store_result();

        if($stmt->num_rows > 0) {
            $stmt->bind_result($id, $password);
            $stmt->fetch();

            if(password_verify($_POST['password'], $password)) {
                session_regenerate_id();
                $_SESSION['loggedin'] = TRUE;
                $_SESSION['name'] = $_POST['username'];
                $_SESSION['id'] = $id;

                // echo 'Welcome back, ' . htmlspecialchars($_SESSION['name'], ENT_QUOTES) . '!';
                header('Location: ./admin.php');
            }else {
                echo "<title>Alert</title>";
                echo "<h1>Wrong username and/or password</h1>"; 
                echo "<a href=../index.html>< Go back</a>"; 
            }
        } else {
            echo "<title>Alert</title>";
            echo "<h1>Wrong username and/or password</h1>"; 
            echo "<a href=../index.html>< Go back</a>"; 
        }

        $stmt->close();
    }
?>
