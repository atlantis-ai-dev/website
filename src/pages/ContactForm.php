<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "yugdv27@gmail.com";
    $subject = "Contact Form Submission";

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // File handling
    $file = isset($_FILES['file']) ? $_FILES['file'] : null;

    // email message
    $messageContent = "Name: $name\nEmail: $email\nMessage: $message";


    // Send the email
    if (mail($to, $subject, $messageContent)) {
        echo "Thank you for contacting us!";
    } else {
        echo "There was an error sending your message.";
    }
}
?>
