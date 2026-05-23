const nodemailer = require("nodemailer");

const sendEmail = async ({ name, email, message }) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        family: 4,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `New Portfolio Message from ${name}`,
        html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;