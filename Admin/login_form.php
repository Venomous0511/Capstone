<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>login form</title>
	<link rel="stylesheet" type="text/css" href="./assets/css/style.css">
</head>

<body>
	<div class="form-container">
		<form action="login_form.php" method="post">
			<img src="./assets/images/logo.png">
			<h3>Admin Login</h3>
			<input type="name" name="username" required placeholder="Enter your Username">
			<input type="password" name="password" required placeholder="Enter your Password">
			<input type="submit" name="submit" value="Log In" class="form-btn">
		</form>
	</div>
</body>

</html>

<?php
	$conn = mysqli_connect('localhost','root','','admin_db');

	// Check if form is submitted
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		// Get form data
		$username = $_POST['username'];
		$password = $_POST['password'];
	
		// Validate credentials (replace with your database query)
		$query = "SELECT * FROM admin WHERE username = '$username' AND password = '$password'";
		$result = mysqli_query($conn, $query);
	
		if ($result && mysqli_num_rows($result) > 0) {
			// Login successful
			echo "Login successful!";
			header('Location: ./assets/admin.html');
		} else {
			// Redirect to login page after 3 seconds
			echo '
				<script>
					setTimeout(function() {
					alert("Invalid username or password.");
					window.location.href = "./login_form.php";
							}, 1000);
				</script>';
		}
	
		// Close database connection
		mysqli_close($conn);
	} else {
		// Redirect to login page if accessed directly
		// header('Location: ./assets/admin.html');
		exit();
	}
	// error color
	if (isset($error)) {
		foreach($error as $error){
			echo '<span class="error-msg">'.$error.'</span>';
		};
	};

	// logout
	
?>