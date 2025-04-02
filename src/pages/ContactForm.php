<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "atlatisaigmail@gmail.com"; //assuming this is the email
    $subject = "Contact Form Submission";


    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST['message']);
    $file = $_FILES['file'] ?? null;

    if (!$email) {
        die("Invalid email address.");
    }

    $recaptchaSecret = '6LfE1AYrAAAAANwFGM1ZgULPfChq3bQiDIN101v5';
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    $recaptchaCheck = file_get_contents(
        "https://www.google.com/recaptcha/api/siteverify?secret=$recaptchaSecret&response=$recaptchaResponse"
    );
    $responseKeys = json_decode($recaptchaCheck, true);

    if (!$responseKeys["success"]) {
        die('reCAPTCHA verification failed');
    }

    // Setup PHPMailer
    $mail = new PHPMailer(true);

    try {
        // SMTP Settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'atlantisai@gmail.com';       
        $mail->Password = 'your-app-password';          //password,not actual email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email Headers
        $mail->setFrom($mail->Username, 'Website Contact Form');  
        $mail->addReplyTo($email, $name);                          
        $mail->addAddress($to);                                    
        $mail->Subject = $subject;

      
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
