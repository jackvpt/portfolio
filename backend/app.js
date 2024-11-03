/** Imports */
require("dotenv").config() /** Load environnement variables from .env file to process.env */
const helmet = require("helmet")
const express = require("express")
const multer = require("multer")
const nodemailer = require('nodemailer');

/** Create an express application */
const app = express()


/** Middleware which intercepts all queries with JSON type and builds req.body (replaces body-parser) */
app.use(express.json())

/** Protect application by setting various HTTP headers (XSS, Clickjacking,...) but allowing images from 'same-site' */
app.use(helmet({ crossOriginResourcePolicy: { policy: "same-site" } }))

/** Middleware for CORS headers */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*") /** All origins authorized */
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization") /** Some headers authorized */
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS") /** Some methods authorized */
  next() /** Go to next middleware */
})

const transporter = nodemailer.createTransport({
  service: "gmail", // Use email service (ex: Gmail)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false, // Deactivate SSL check
  }
});



app.post('/send-email', multer().none(), (req, res) => { /** Multer must be used if req contains FormData */
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message from portfolio sent by ${name}`,
    text: message,
    html: `
    <h1 style="color: #3498db; font-size: 24px;">Bienvenue !</h1>
    <p style="font-family: Arial, sans-serif; color: #333;">
      Ceci est un e-mail stylisé avec du CSS inline.
    </p>
    <a href="https://www.example.com" style="text-decoration: none; color: #e74c3c;">
      Visitez notre site
    </a>
  `

//   html: `
//     <h1>Bienvenue !</h1>
//     <p>Voici une image intégrée dans l'e-mail :</p>
//     <img src="cid:image1" alt="Description de l'image" width="300" />
//   `,
//   attachments: [
//     {
//       filename: 'image.jpg', // Nom du fichier de l'image
//       path: './path/to/image.jpg', // Chemin vers l'image locale
//       cid: 'image1' // CID pour faire référence à cette image dans le HTML
//     }
//   ]
// };


  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      res.status(500).send({ success: false, error: "Email send error" })
    } else {
      console.log('Email sent:', info.response)
      res.send({ success: true, message: "Email sent successfully" })
    }
  })
})

module.exports = app
