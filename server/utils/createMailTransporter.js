const nodeMailer = require('nodemailer');

const createMailTransporter = () => {
    return nodeMailer.createTransport({
        service:'hotmail',
        auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
        },
    });
    }
module.exports = {createMailTransporter};