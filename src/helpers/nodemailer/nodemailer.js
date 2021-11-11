const nodemailer = require('nodemailer');
const config = require('../../config/index.js');

async function mailing(mailFrom, mailTo, subject, html) {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, //! CAMBIAR A TRUE
        auth: {
            user: config.MAIL_FROM,
            pass: config.MAIL_PASS 
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: await mailFrom || "no_reply@make_sense.com",
        to: await mailTo || config.MAIL_TO,
        subject: await subject,
        html: await html,
    });

    console.log(info);
}

module.exports = mailing