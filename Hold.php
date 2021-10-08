<?php
/**
 * This example shows sending a message using PHP's mail() function.
 */
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';
require './vendor/autoload.php';

 $res = '';
if (isset($_POST['send'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $body = "NAME: $name<br>EMAIL: $email<br>PHONE: $phone<br>SUBJECT: $subject<br>MSG: $message";

    try {
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'rnico.dev';
        $mail->Username = 'admin@rnico.dev';
        $mail->Password = 'w8h-yu39LpJ:xxJ';
        $mail->SMTPAuth = true;
        $mail->Port = 587;
        $mail->SMTPSecure = 'tls';
        $mail->setFrom('admin@rnico.dev', 'Richie');
        $mail->addReplyTo('admin@rnico.dev');
        $mail->addAddress('rnico.dev@gmail.com', 'Richie');
        $mail->addAttachment('images/phpmailer_mini.png');
        $mail->isHTML(true);
        $mail->Subject = 'Contact Message';
        $mail->Body = $body;
        $mail->AltBody = strip_tags($body);
        $mail->send();
        $res = 'Got IT !!';
    } catch (Exception $e) {
        $res = "Mail Sent Error: $mail->ErrorInfo";
    }
}

?>