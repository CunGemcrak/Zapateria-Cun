const nodemailer = require('nodemailer');
const { MAIL_STILOZAP, APP_KEY_MAIL, PORT_MAIL } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: PORT_MAIL,
  secure: true, // Use `true` for port 465, `false` for other ports
  auth: {
    user: MAIL_STILOZAP,
    pass: APP_KEY_MAIL,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Error configuring transporter:', error);
  } else {
    console.log('Mail transporter configured:', success);
  }
});

module.exports = { transporter };

