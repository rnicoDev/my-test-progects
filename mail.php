<?php
/**
 * This example shows sending a message using PHP's mail() function.
 */
if(!empty($_POST["send"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];


require_once "vendor/phpmailer/phpmailer/src/PHPMailer.php";
require_once "vendor/phpmailer/phpmailer/src/SMTP.php";
require_once "vendor/phpmailer/phpmailer/src/Exception.php";

require './vendor/autoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->isSMTP(true);
$mail->Host = 'rnico.dev';
$mail->Port = 587;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Username = "admin@rnico.dev";
$mail->Password = "w8h-yu39LpJ:xxJ";
//Set who the message is to be sent from
$mail->setFrom('admin@rnico.dev', 'Richie');
//Set an alternative reply-to address
$mail->addReplyTo('admin@rnico.dev');
//Set who the message is to be sent to
$mail->addAddress('rnico.dev@gmail.com', 'Richie');
//Set the subject line
$mail->isHTML(true);
$mail->Subject = $_POST["subject"];
$mail->Body ='
<html>
<body>
<h3>
<strong>Name:</strong> '.$name.' <br><br>
<strong>Phone:</strong> '.$phone.' <br><br>
<strong>Email:</strong> '.$email.' <br><br>
<strong>Msg:</strong> '.$message.' <br><br>
</h3>

</body
</html>';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body


//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';
//Attach an image file
$mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
if (!$mail->send()) {
    echo "Sorry something went wrong";
} else {
    echo "Message sent! Thank , Someone will get back shortly";
}
exit(json_encode(array("status" => $status, "response" => $response)));
}
?>