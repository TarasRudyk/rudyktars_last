<?php
if (isset($_POST['send'])) {
    $msg = 'Name: ' .$_POST['name'] ."\n"
            .'E-mail: ' .$_POST['email'] ."\n"
            .'Message: ' .$_POST['message'];
    mail ('trudyk@trudyk.net23.net', $msg);
} else {
    header('Location: contact-us.php');
    exit(0);
}
?>