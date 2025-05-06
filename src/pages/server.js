const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));
app.use(bodyParser.json());

// Replace with your actual email and password or app password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',       // YOUR email
    pass: '',        // App password (recommended)
  },
});

app.post('/contact', (req, res) => {
  const { first_name, last_name, email, message } = req.body;

  const mailOptions = {
    from: email, // user's email
    to: 'yugdv27@gmail.com', // your email (receiver)
    subject: `New Contact Form Submission from ${first_name} ${last_name}`,
    text: `You received a message from ${email}:\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email send error:', error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
