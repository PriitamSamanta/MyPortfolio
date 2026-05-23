const nodemailer = require("nodemailer");

const sendEmail = async ({ name, email, message }) => {
    const transporter = nodemailer.createTransport({
        host: "142.250.102.109",
        port: 587,
        secure: false,
        requireTLS: true,
        tls: {
            servername: "smtp.gmail.com",
        },
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