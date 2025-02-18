<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

if (isset($_POST['email'])) {
    $to = "danil.konovalov.70@gmail.com";
    $from = "danil.konovalov.70@gmail.com";
    $subject = "Заполнена контактная форма на сайте " . $_SERVER['HTTP_REFERER'];

    $message = "\nИмя пользователя: " . $_POST['name'] . "\nEmail пользователя: " . $_POST['email'] . "\nТелефон пользователя: " . $_POST['phone'] . "\nТариф: " . $_POST["tariff"];

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        //$mail->SMTPDebug = 2; // 2 for debugging output, 0 for no output
        $mail->Host       = 'smtp.gmail.com'; // Set your SMTP server
        $mail->SMTPAuth   = true;
        $mail->Username   = 'danil.konovalov.70@gmail.com'; // Set your SMTP username
        $mail->Password   = 'dnnh zesa glog xuta';   // Set your SMTP password
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587; // You may need to adjust this based on your SMTP server configuration
        $mail->CharSet    = 'UTF-8';
        // Sender information
        $mail->setFrom($from);
        $mail->addReplyTo($from);

        // Recipient
        $mail->addAddress($to);

        // Attachments
        //if (isset($_FILES['file']) && is_uploaded_file($_FILES['file']['tmp_name'])) {
        //    $mail->addAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
        //}

        // Content
        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body    = $message;

        $mail->send();
        echo $_POST['name'] . ', Ваше сообщение отправлено, спасибо!';
    } catch (Exception $e) {
        echo 'Извините, письмо не отправлено. Ошибка: ', $mail->ErrorInfo;
    }
}
?>
