<?php

if (isset($_POST['submit'])) {
    
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "alan@alanordorica.com";
    $headers .= "Reply-To: .$mailFrom\r\n"; 
    $headers .= "Return-Path: .$mailFrom\r\n"; 
    $headers .= "From: .$mailFrom\r\n";  
    $headers .= "Organization: Sender Organization\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "X-Mailer: PHP". phpversion() ."\r\n" ;


    $txt = "New Website contact! You Have received an e-mail from: ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: ../index.html?mailsend");
}