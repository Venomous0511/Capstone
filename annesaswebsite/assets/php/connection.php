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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(isset($_POST["nameday"])) {
        // Day Reservation form submitted
        $nameday = $_POST["nameday"];
        $emailday = $_POST["emailday"];
        $addressday = $_POST["addressday"];
        $dateday = $_POST["dateday"];
        $cottage_id = $_POST["cottages"];
        $kidsday = $_POST["kidsday"];
        $adultsday = $_POST["adultsday"];

        // Prepare and execute SQL query
        $sql = "INSERT INTO day_reservations (nameday, emailday, addressday, dateday, cottage_id, kidsday, adultsday)
                VALUES (?, ?, ?, ?, ?, ?, ?)";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssiii", $nameday, $emailday, $addressday, $dateday, $cottage_id, $kidsday, $adultsday);

        if ($stmt->execute()) {
            echo "Day Reservation successful!";
        } else {
            echo "Error: " . $stmt->error;
        }
        
        $stmt->close();
    } elseif(isset($_POST["name-night"])) {
        // Night Reservation form submitted
        $nameNight = $_POST["name-night"];
        $emailNight = $_POST["email-night"];
        $addressNight = $_POST["address-night"];
        $dateNight = $_POST["date-night"];
        $roomNumber = $_POST["rooms"];
        $kidsNight = $_POST["kids-night"];
        $adultsNight = $_POST["adults-night"];

        // Prepare and execute SQL query
        $sql = "INSERT INTO night_reservations (nameNight, emailNight, addressNight, dateNight, roomnumber, kidsNight, adultsNight)
                VALUES (?, ?, ?, ?, ?, ?, ?)";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssiii", $nameNight, $emailNight, $addressNight, $dateNight, $roomNumber, $kidsNight, $adultsNight);

        if ($stmt->execute()) {
            echo "Night Reservation successful!";
        } else {
            echo "Error: " . $stmt->error;
        }
        
        $stmt->close();
    } else {
        echo "Invalid form submission.";
    }
}

// Close connection
$conn->close();
?>
