<?php
    include 'connection.php';
        // If the user is not logged in redirect to the login page...
    if (!isset($_SESSION['loggedin'])) {
	    header('Location: ../index.html');
	    exit;
    }

    $sql = "SELECT * FROM bookings";
    $result = $conn->query($sql);

    $countSql = "SELECT COUNT(*) as count FROM bookings";
    $countResult = $conn->query($countSql);
?>

<!DOCTYPE html>
<html lang="en-PH">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- LOCAL CSS -->
    <link rel="stylesheet" href="../css/admin.css?v=<?php echo time(); ?>">
    <!-- FAV ICON -->
    <link rel="icon" type="image/png" href="../assets/img/logo.png" />

    <!-- JAVASCRIPT -->
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>

    <title>Welcome - Annesa Resort</title>
</head>

<div>
    <div class="navigation">
        <ul>
            <li>
                <a href="#">
                    <span class="icon"><img src="../assets/img/logo.png" alt=""></span>
                    <span class="title">Annesa's Resort</span>
                </a>
            </li>
            <li onclick="showDashboard()">
                <a href="#">
                    <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                    <span class="title">Dashboard</span>
                </a>
            </li>
            <li onclick="showCustomers()">
                <a href="#">
                    <span class="icon"><ion-icon name="people-circle-outline"></ion-icon></span>
                    <span class="title">Customers</span>
                </a>
            </li>
            <li onclick="showMessages()">
                <a href="#">
                    <span class="icon"><ion-icon name="chatbox-ellipses-outline"></ion-icon></span>
                    <span class="title">Messages</span>
                </a>
            </li>
            <li onclick="showRecords()">
                <a href="#">
                    <span class="icon"><ion-icon name="bar-chart-outline"></ion-icon></span>
                    <span class="title">Records</span>
                </a>
            </li>
            <li onclick="showPassword()">
                <a href="#">
                    <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <span class="title">Password</span>
                </a>
            </li>
            <li>
                <a href="../logut.php">
                    <span class="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                    <span class="title">Sign Out</span>
                </a>
            </li>
        </ul>
    </div>

    <!-- main -->
    <div class="main">
        <div class="topbar">
            <div class="toggle">
                <ion-icon name="menu-outline"></ion-icon>
            </div>

            <div class="Welcome">
                <h3>Welcome back, <?=htmlspecialchars($_SESSION['name'], ENT_QUOTES)?>!</h3>
            </div>
        </div>

        <!-- DASHBOARD -->
        <div class="dashboard" id="dashboard">
            <!-- status update -->
            <div class="cardbox">
                <a href="">
                    <div class="card">
                        <div>
                        <?php
                            if ($countResult) {
                                $countRow = $countResult->fetch_assoc();
                                $bookingCount = $countRow['count'];
                                // Display the count
                                    echo '
                                        <div class="numbers">' . $bookingCount . '</div>
                                        <div class="cardname">Bookings</div>';
                            }
                        ?>
                        </div>
                        <div class="iconbx">
                            <ion-icon name="bag-handle-outline"></ion-icon>
                        </div>
                    </div>
                </a>

                <a href="">
                    <div class="card">
                        <div>
                            <div class="numbers">No Messages Yet!</div>
                            <div class="cardname">Messages</div>
                        </div>
                        <div class="iconbx">
                            <ion-icon name="chatbubbles-outline"></ion-icon>
                        </div>
                    </div>
                </a>

                <a href="">
                    <div class="card">
                        <div>
                        <?php
                             $totalPaymentSql = "SELECT SUM(payment) as totalPayment FROM bookings WHERE status != 'refund'";
                             $totalPaymentResult = $conn->query($totalPaymentSql);

                             if ($totalPaymentResult) {
                                $totalPaymentRow = $totalPaymentResult->fetch_assoc();
                                $totalPayment = $totalPaymentRow['totalPayment'];
                                
                                echo '
                                    <div class="numbers"> ₱ ' . $totalPayment . '</div>
                                    <div class="cardname">Income</div>
                                ';
                            }
                        ?>
                        </div>
                        <div class="iconbx">
                            <ion-icon name="wallet-outline"></ion-icon>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Order details -->
            <div class="details">
                <div class="recentbookings">
                    <div class="cardheader">
                        <h2>Recent Bookings</h2>
                    </div>
                    <table>
                        <thead>
                            <td>Name</td>
                            <td>Payment</td>
                            <td>Status</td>
                        </thead>
                        <tbody>
                            <?php
                            // Fetch data from the database
                            if ($result->num_rows > 0) {
                                while ($row = $result->fetch_assoc()) {
                                    echo '<tr>
                                            <td>' . $row["clientname"] . '</td>
                                            <td> ₱ ' . $row["payment"] . '</td>
                                            <td><span class="status ' . strtolower(str_replace(' ', '', $row["status"])) . '">' . $row["status"] . '</span></td>
                                        </tr>';
                                }
                            } else { 
                                echo '<h1 class="nobookings">No Bookings have been detected!</h1>';
                            }
                            ?>
                        </tbody>
                    </table>
                </div>

                <!-- New Customers -->
                <div class="recentCustomers">
                    <div class="cardheader">
                        <h2>Recent Customers</h2>
                    </div>
                    <table>
                    <?php
                        $sql = "SELECT clientname, City FROM bookings";  
                        $result = $conn->query($sql);
                    
                            // Fetch data from the database
                            if ($result->num_rows > 0) {
                                while ($row = $result->fetch_assoc()) {
                                    echo '<tr>
                                            <td>
                                                <h4>' . $row["clientname"] . '
                                                    <br>
                                                    <span style="font-size: 14px; color: #999;">' . $row["City"] . '</span>
                                                </h4>
                                            </td>
                                        </tr>';
                                }
                            } else { 
                                echo '<h5>No Bookings have been detected!</h5>';
                            }
                            ?>
                    </table>
                </div>
            </div>
        </div>

        <!-- CUSTOMERS -->
        <div class="customers" id="customers">
            <div class="Customers">
                <div class="cardheader">
                    <h2>Recent Customers</h2>
                </div>

                <table>
                    <tr>
                        <th>NAME</th>
                        <th>ADDRESS</th>
                        <th>AMOUNT</th>
                    </tr>
                    <tr>
                        <td>Richel Malang</td>
                        <td><span>Quezon City</span></td>
                        <td id="subtotal">2000</td>
                    </tr>
                    <tr>
                        <td>Richel Malang</td>
                        <td><span>Quezon City</span></td>
                        <td id="subtotal">2000</td>
                    </tr>

                </table>

                <div class="total-container">
                    <h4>Total: <span class="total">₱</span></h4>
                </div>
            </div>
        </div>

        <!-- MESSAGES -->
        <div class="messages" id="messages">
            <!-- New Customers -->
            <div class="Messages">
                <div class="cardheader">
                    <h2>Messages</h2>
                </div>
                <table>
                    <tr>
                        <th>NAME</th>
                        <th>MESSAGE</th>
                        <th>EMAIL</th>
                    </tr>
                    <tr>
                        <td> Richel Malang</td>
                        <td><span>Can I have a reservation?</span></td>
                        <td>gurang@gmail.com</td>
                    </tr>
                    <tr>
                        <td> Richel Malang</td>
                        <td><span>Can I have a reservation?</span></td>
                        <td>gurang@gmail.com</td>
                    </tr>
                    <tr>
                        <td> Richel Malang</td>
                        <td><span>Can I have a reservation?</span></td>
                        <td>gurang@gmail.com</td>
                    </tr>
                </table>
            </div>
        </div>

        <!-- RECORDS -->
        <div class="records" id="records">
            <!-- Records -->
            <div class="Records">
                <div class="bookings">
                    <div class="cardheader">
                        <h2>Records</h2>
                    </div>

                    <table>
                        <thead>
                            <td>Name</td>
                            <td>Payment</td>
                            <td>No. of Customers</td>
                            <td>Status</td>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Malang, Richel</td>
                                <td>2,000</td>
                                <td>3</td>
                                <td><span class="status unpaid">Unpaid</span></td>
                            </tr>
                            <tr>
                                <td>Malang, Richel</td>
                                <td>3,000</td>
                                <td>4</td>
                                <td><span class="status progress">In progress</span></td>
                            </tr>
                            <tr>
                                <td>Malang, Richel</td>
                                <td>2,500</td>
                                <td>2</td>
                                <td><span class="status refund">refund</span></td>
                            </tr>
                            <tr>
                                <td>Cabrera, Joel</td>
                                <td>5,000</td>
                                <td>4</td>
                                <td><span class="status paid">Paid</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- CHANGE PASSWORD -->
        <div class="change-password" id="change-password">
            <div class="password">
                <!-- <form action="" method="POST" class="pass-form">
                    <label for="newpassword">New Password</label>
                    <input type="text" name="newpassword" placeholder="New Password" >
                    <label for="repassword">Re-Enter New Password</label>
                    <input type="text" name="repassword" placeholder="Re-enter New Password" >

                    <button class="button" id="button">Change Password</button>
                </form> -->
            </div>
        </div>

    </div>

    <script src="../js/main.js" type="text/javascript"></script>
    </body>

</html>