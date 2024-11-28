const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const gmailTransporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "rajunarasimha017@gmail.com", // Gmail ID
    pass: "clnf obmx mgbc sbmk", // App password
  },
});

app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mailOptions = {
    from: "rajunarasimha017@gmail.com",
    to: "rajunarasimha017@gmail.com", // Replace with your email
    subject: "Contact Request From Portfolio",
    html: `
      <h3>Contact Details:</h3>
      <p><b>First Name:</b> ${firstName}</p>
      <p><b>Last Name:</b> ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  };

  gmailTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error.message);
      return res.status(500).json({ code: 500, message: "Failed to send email" });
    } else {
      console.log("Email Sent Successfully:", info.response);
      return res.status(200).json({ code: 200, message: "Email sent successfully" });
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
