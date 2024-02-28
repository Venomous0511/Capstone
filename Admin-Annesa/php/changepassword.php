<?php
    include 'connection.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($stmt = $conn->prepare('UPDATE admin_login SET password = ?')) {
            // Hash the new password
            $new_password_hash = password_hash($_POST['newpwd'], PASSWORD_BCRYPT);
            $stmt->bind_param('s', $new_password_hash);
                if ($stmt->execute()) {
                     echo '
                            <h1>Your password has been changed!</h1>
                            <a href="./admin.php">< Go back</a>
                        ';
                    } else {
                        echo '<h4>Error updating password: ' . $conn->error . '</h4>';
                    }
        }
    }
?>