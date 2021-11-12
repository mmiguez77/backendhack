const nodemailer = require('nodemailer');
const config = require('../../config/index.js');

async function mailing(mailFrom, mailTo, subject, html) {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        
        // datos a definir según plataforma de envios de mail de make_sense
        // y poder configurar otros servidores        
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, 
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
        to: await mailTo,
        subject: await subject,
        html: await html,
    });

    console.log(info);
}

module.exports = mailing