<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; 
use Dotenv\Dotenv;


$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST['message']);
    $file = $_FILES['file'] ?? null;

    if (!$email) {
        die("Invalid email address.");
    }

  
    $recaptchaSecret = $_ENV['RECAPTCHA_SECRET'];
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    $recaptchaVerify = file_get_contents(
        "https://www.google.com/recaptcha/api/siteverify?secret=$recaptchaSecret&response=$recaptchaResponse"
    );
    $recaptchaResult = json_decode($recaptchaVerify, true);

    if (!$recaptchaResult["success"]) {
        die("reCAPTCHA verification failed.");
    }


    $mail = new PHPMailer(true);

    try {
    
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['SMTP_USERNAME']; 
        $mail->Password = $_ENV['SMTP_PASSWORD'];  
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom($_ENV['SMTP_USERNAME'], 'Website Contact Form');
        $mail->addReplyTo($email, $name);
        $mail->addAddress($_ENV['RECIPIENT_EMAIL']); // 👈 also from .env
        $mail->Subject = "Contact Form Submission";

        $mail->Body = "You have received a new message:\n\nName: $name\nEmail: $email\nMessage:\n$message";

        if ($file && $file['error'] === UPLOAD_ERR_OK) {
            $mail->addAttachment($file['tmp_name'], $file['name']);
        }

        $mail->send();
        echo "Thank you for contacting us!";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
