import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config();

const receiveEmail = async(Heading, Sendmessage, sendTO, sendFROM, ReplyTO) =>{
   const Transporter =  nodemailer.createTransport({
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
        from: sendFROM,
        to: sendTO,
        replyTo: ReplyTO,
        subject: Heading,
        html: Sendmessage
    }

    Transporter.sendMail(options, function(err, info){
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    })
}
export default receiveEmail;