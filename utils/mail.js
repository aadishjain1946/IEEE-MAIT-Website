const nodemailer = require('nodemailer');
const path = require('path');
const env = require(path.join(__dirname, "env"));
function sendEmail(subject, message, recipents, response) {
    nodemailer.createTestAccount((err, account) => {
        let trans = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mait.ieee.sb@gmail.com',
                pass: env[0] + env[1] + env[2] + env[3]
            }
        })
        let mailoptions = {
            from: '"IEEE-MAIT <mait.ieee.sb@gmail.com>"',
            to: recipents,
            subject: subject,
            html: message
        };
        trans.sendMail(mailoptions, (err, info) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log("mail sent")
            }
        })
    })
}
module.exports = sendEmail;