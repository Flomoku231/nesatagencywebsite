import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv'

dotenv.config()


const sendEmail = async(subject, message, sendTo, sendFrom, ReplyTo) =>{
    const Transporter = nodemailer.createTransport({
        host: process.env.HOST ,
        Port: process.env.EmailPort,
        auth: {
            user: process.env.NESATemail,
            pass: process.env.NESATpassword,
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