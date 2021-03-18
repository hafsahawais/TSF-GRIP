const express = require('express');
const router = express.Router();
const request = require('request');
const nodemailer = require('nodemailer');
const cors = require('cors');

router.options('/sendVolunteer', cors());

router.post('/sendVolunteer', cors(), (req, res) => {
  const outputData = `
    <p>Idara Al-khair has a new form submission</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: false,
    port: 25,
    auth: {
      user: 'wajeeh.zahid786@gmail.com',
      pass: 'helpmeplease007'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let HelperOptions = {
    from: '"no-reply@idaraalkhair.com"',
    to: 'hafsahonline@gmail.com',
    subject: 'IAK-web:Volunteer Form Submission',
    text: 'Hello',
    html: outputData
  };



  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("The message was sent!");
    console.log(info);
  });

});
module.exports = router;
