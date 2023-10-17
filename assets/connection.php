<?php
// Database connection parameters
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$database = "reservation"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nameday = $_POST["nameday"];
    $emailday = $_POST["emailday"];
    $addressday = $_POST["addressday"];
    $dateday = $_POST["dateday"];
    $cottage_id = $_POST["cottages"];
    $kidsday = $_POST["kidsday"];
    $adultsday = $_POST["adultsday"];

    // Prepare and execute SQL query
    $sql = "INSERT INTO `day_reservations`(`id`, `nameday`, `emailday`, `addressday`, `dateday`, `cottage_id`, `kidsday`, `adultsday`) VALUES ('$nameday','$emailday','$addressday','$dateday','$dateday ','$cottage_id','$kidsday','$adultsday')";

    if ($conn->query($sql) === TRUE) {
        echo "Reservation successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close connection
    $conn->close();
}
?>