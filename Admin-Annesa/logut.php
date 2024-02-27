<?php
session_start();
session_destroy();
// Redirect to the login page:
if (session_destroy() === session_destroy()) {
    header('Location: index.html');
}

?>