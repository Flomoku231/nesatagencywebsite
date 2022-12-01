import nodemailer from 'nodemailer';

const sendEmail = async(subject, message, sendTo, sendFrom, ReplyTo) =>{
    const Transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        Port: "587",
        auth: {
            user: "nesatagency2023@gmail.com",
            pass: "nesat@2023",
        },
        tls: {
            rejectUnauthorized: false,
        }
    })

    const options ={
        from: sendFrom,
        to: sendTo,
        replyTo: ReplyTo,
        subject: subject,
        html: message
    }

    Transporter.sendMail(options, function(err, info){
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    })
}
export default sendEmail;