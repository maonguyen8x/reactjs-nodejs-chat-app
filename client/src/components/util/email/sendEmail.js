const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            service: true,
            port: 465,
            secure: true,
            auth: {
                user: 'mtv.maonv@gmail.com',
                pass: 'pass@pass'
            },
        });

        await transporter.sendMail({
            from: 'mtv.maonv@gmail.com',
            to: email,
            subject: subject,
            text: text,
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;