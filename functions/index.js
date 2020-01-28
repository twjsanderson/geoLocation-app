const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
const gmailEmail = functions.config().email.user;
const gmailPass = functions.config().email.pass;

exports.submit = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        if (req.method !== 'POST') {
            return res.status(500).json({
                message: 'Not allowed'
            });
        };
        const mailTransport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user: gmailEmail,
                pass: gmailPass
            }
        });

        const mailOptions = {
            from: 'test@gmail.com',
            to: gmailEmail,
            subject: `test`,
            html: `<p>${req.body.message}</p>`
        };

        return mailTransport.sendMail(mailOptions).then(info => {
            console.log(info);
            return res.status(200).json({
                message: 'message sent!'
            });
        }).catch(error => {
            console.log(error);
            return res.status(500).json({
                message: error
            });
        })
    })
            
})
