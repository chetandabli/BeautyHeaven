const nodemailer = require('nodemailer');

function SendOTP(client,otp){
    

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'piperace11789@gmail.com',
            pass: process.env.AUTHPASS
        }
    });
    
        // setup email data
        let mailOptions = {
            from: 'Nihar',
            to: client,
            subject: 'OTP for booking ',
            text: 'random otp for booking ' + otp
        };
        
        // send email
      const Transport =  transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
               
            
            } else {
                console.log('Email sent: ' + info.response);
               
            }
        });
        
     
}

module.exports = {SendOTP}