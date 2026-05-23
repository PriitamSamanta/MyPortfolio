const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

const createContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const contact = await Contact.create({
            name,
            email,
            message,
        });

        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: contact,
        });

        sendEmail({ name, email, message }).catch((error) => {
            console.log("Email Error:", error.message);
        });
        
    } catch (error) {
        console.log("Contact Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

module.exports = { createContact };