<?php
/**
 * This example shows sending a message using PHP's mail() function.
 */
if (isset($_POST['sendflag'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
}
require './mail/PHPMailerAutoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'rnico.dev';
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Username = "admin@rnico.dev";
$mail->Password = "w8h-yu39LpJ:xxJ";
//Set who the message is to be sent from
$mail->setFrom('admin@rnico.dev', 'Richie');
//Set an alternative reply-to address
$mail->addReplyTo('admin@rnico.dev');
//Set who the message is to be sent to
$mail->addAddress('rnico.dev@gmail.com', 'John Doe');
//Set the subject line
$mail->Subject = 'PHPMailer mail() test';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->Body = 'Hello, this is my message.';
$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';
//Attach an image file
$mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}
