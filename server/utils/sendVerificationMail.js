
const {createMailTransporter} = require('./createMailTransporter');

const sendVerificationMail = (user) => {
    console.log('Function called');
    const transporter = createMailTransporter();
    const mailOptions = {
        from: 'Petagram App <'+process.env.EMAIL_USERNAME+'>',
        to: user.email,
        subject: 'Email Verification',
        html: `<p>Hello ${user.username}, Verify your mail by clicking this link...</p>
        <a href="${process.env.CLIENT_URL}/email-verification?emailToken=${user.emailToken}">Verify Email</a>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Email sent: ' + info.response);
        }
    }
    );
}
module.exports = {sendVerificationMail};

