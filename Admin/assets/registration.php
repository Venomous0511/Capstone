<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>register form</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>
    <div class="form-container">
        <form action="" method="post">
            <h3>register now</h3>
            <input type="text" name="name" required placeholder="Enter your Name">
            <input type="email" name="email" required placeholder="Enter your Email">
            <input type="password" name="password" required placeholder="Enter your Password">
            <input type="password" name="cpassword" required placeholder="Confirm your Password">
            <select name="user_type">
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            <input type="submit" name="submit" value="register now" class="form-btn">
            <p>Already have an account? <a href="login_form.php">Login Now</a></p>
        </form>
    </div>
</body>

</html>

<?php

	@include 'config.php';

	if (isset($_POST['submit'])) {
		
		$name = mysqli_real_escape_string($conn, $_POST['name']);
		$email = mysqli_real_escape_string($conn, $_POST['email']);
		$pass = md5($_POST['password']);
		$cpass = md5($_POST['cpassword']);
		$user_type = $_POST['user_type'];

		$select = " SELECT * FROM user_form WHERE name = '$name' && password = '$pass'";

		$result = mysqli_query($conn, $select);

		if (mysqli_num_rows($result) > 0) {
			$error[] = 'User already exist!';
		}else {
			if ($pass != $cpass) {
				$error[] = 'Password not matched!';
			}else {
				$insert = "INSERT INTO user_form(name, email, password, user_type) VALUES('$name', '$email', '$pass', '$user_type')";
				mysqli_query($conn, $insert);
				header('location:login_form.php');
			}
		}
	};
	
	if (isset($error)) {
		foreach($error as $error){
			echo '<span class="error-msg">'.$error.'</span>';
		};
	};
?>