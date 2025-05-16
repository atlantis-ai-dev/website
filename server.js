const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// ✅ Enable CORS properly (must come before routes)
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));


// ⚠️ Warning: Store sensitive info like this in a .env file
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yugdv27@gmail.com',
    pass: 'Yugisawesome2005', // move to environment variable ASAP
  },
});

// ✅ Contact form endpoint
app.post('/contact', (req, res) => {
  const { first_name, last_name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'yugdv27@gmail.com',
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

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
