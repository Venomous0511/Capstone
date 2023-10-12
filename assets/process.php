<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars($_POST['name-day']);
    $email = htmlspecialchars($_POST['email-day']);
    $address = htmlspecialchars($_POST['address-day']);
    $date = htmlspecialchars($_POST['date-day']);
    $cottage = htmlspecialchars($_POST['cottage']);
    $kids = htmlspecialchars($_POST['kids-day']);
    $adults = htmlspecialchars($_POST['adults-day']);

    // TODO: Process the form data as needed, such as storing it in a database
    // For now, let's just print the collected data
    echo "Name: $name <br>";
    echo "Email: $email <br>";
    echo "Address: $address <br>";
    echo "Date: $date <br>";
    echo "Cottage: Cottage $cottage <br>";
    echo "Number of Kids: $kids <br>";
    echo "Number of Adults: $adults <br>";

    // You can perform database operations or other actions with the form data here

    // Redirect to a thank you page after processing the form
    // header("Location: thank-you.php");
}
?>