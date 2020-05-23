<?php

if (isset($_POST['submit'])) {
    
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];
    $mailTo = "alaniordorica@gmail.com";
    $txt = "New Message from: ".$name.".\n\n".$message;

    $headers .= "Reply-To: $mailFrom\r\n"; 
    $headers .= "Return-Path: $mailFrom\r\n"; 
    $headers .= "From: $name <$mailFrom>\r\n";  
    $headers .= "Organization: Sender Organization\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "X-Mailer: PHP". phpversion() ."\r\n" ;


    mail($mailTo, $subject, $txt, $headers);
    header("Location: ../index.html?mailsend");
}
else 
{
    header("Location:index.html");
}

?>