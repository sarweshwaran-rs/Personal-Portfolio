const authorize = require("../services/googleApiAuthService.js");
const sendEmail = require("../services/gmailApiService.js");

async function mailer(to, subject, html) {
    try {
        const auth = await authorize();
        return await sendEmail(auth, to, subject, html);
    } catch (error) {
        console.error("Mailer Error: ", error);
        throw error;
        
    }
}

module.exports = mailer;

// const mailer = require('nodemailer');
// const dotenv = require('dotenv');

// dotenv.config();

// const transporter = mailer.createTransport({
//     service:"gmail",
//     auth:{
//         user: process.env.GOOGLE_GMAIL_USER,
//         pass: process.env.GOOGLE_APP_PASSWORD,
//     },
// });

// //console.log(`Transporter: ${transporter}`);

// async function sendMail(to, subject, html) {
//     await transporter.sendMail({
//         from: `"Portfolio Contact" <${process.env.GOOGLE_GMAIL_USER}>`,
//         to,
//         subject,
//         html
//     });
// };

// module.exports = sendMail;