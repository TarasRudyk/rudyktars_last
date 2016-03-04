<?php
    $from = "trudyk@trudyk.net23.net";
    $to = "rudyktaras@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    mail ($to, $name, $email,$message);
?>
