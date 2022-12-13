import express from 'express';
import * as dotenv from 'dotenv'
import mongoose from 'mongoose';
import teamMembers from './DatabaseSchema/teamSchema.js';
import sendEmail from './EmailLogic/sendEmail.js'
import receiveEmail from './EmailLogic/receiveEmail.js';
import testimonyCard from './DatabaseSchema/testimonySchema.js';
import blogPost from './DatabaseSchema/blogPostSchema.js';
import newsLetter from './DatabaseSchema/newsLetterSchema.js'
import findJobsInfo from './DatabaseSchema/findJobsFormSchema.js'
import multer from 'multer'
import Cors from 'cors';
const connectionURL = process.env.NESATconnection;
const app = express();
const PORT = process.env.PORT || 7000;
app.use(express.json())
app.use(Cors())
dotenv.config();
// Team Members Post API 

app.post('/api/home/team/members', function(req, res){
    const teamMemberDB = req.body;
    teamMembers.create(teamMemberDB, function(err, data)
    {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    });
})

// Testimonial Post API
app.post('/api/home/testimonial', function(req, res){
    const testimoniaDB = req.body;
    testimonyCard.create(testimoniaDB, function(err, data){
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    });
});
// BlogPosts Post API
app.post('/api/blog/posts', function(req, res){
    const blogPostDB = req.body;
    blogPost.create(blogPostDB, function(err, data){
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})
// Home Blog Posts POST API
app.post('/api/home/blog', function(req, res){
    const homeBlogDB = req.body;
    blogPost.create(homeBlogDB, function(err, data){
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})
// Post API for news letter
app.post('/api/newsletter/form', function(req, res){
    const {email} = req.body;
    newsLetter.findOne({email: email }, (err, subscriber) =>{
        if(subscriber){
            res.send({ message: "User already exist" })
        }else{
            newsLetter.create({email}, function(err, data){
                if(err){
                    res.status(500).send(err)
                }else{
                    try {
                        const subject = "Subscription Done" 
                        const message = `<h2>Hi!</h2> <p>Thanks for
                        Subcribing to our news Letter. Keep posted for more informations</P>
                        <h3>Nesat Team</h3>`
                        const sendTo = email
                        const sendFrom = process.env.NESATemail
                        const ReplyTo = email

                        sendEmail(subject, message, sendTo, sendFrom, ReplyTo)
                        res.status(201).send(data)
                    } catch (error) {
                        res.status(500).send(error.message)
                    }
                }
            })
        }
    })
    
})
// Post API for contact us form 
app.post('/api/contactUs/form', function(req, res){
    const {name, email, Sendermessage} = req.body;
            try {
                // Send Email Logic
                const subject = "Appreciation" 
                const message = `<h2> Hi ${name}!</h2> <p>Thanks for
                contacting us. We have received your message and promise to contact you shortly</P>
                <h3>Nesat Team</h3> `
                const sendTo = email
                const sendFrom = process.env.NESATemail
                const ReplyTo = email

                sendEmail(subject, message, sendTo, sendFrom, ReplyTo)


                //Received Information in EMail Logic
                const Heading = "Email Request" 
                const Sendmessage = `<h2> Hi Nesat Team!</h2> <p>You have a new Email from ${name} see details below: </p>
                <ul>
                    <li>Name: ${name}</li>
                    <li>Email: ${email}</li>
                    <li>Message: ${Sendermessage}</li>
                </ul>
                <h3>Nesat Team</h3> `
                const sendTO = process.env.RECEIVERemail
                const sendFROM = process.env.NESATemail
                const ReplyTO = process.env.RECEIVERemail

                receiveEmail(Heading, Sendmessage, sendTO, sendFROM, ReplyTO)

            } 
            catch (error) {
                res.status(500).send(error.message);
            }
})
// Post API for Find Jobs form
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './RecruiterCV' )
    },
    filename: (req, file, cb) =>{
        cb(null, Date.now() + "--" + file.originalname );
    }
    
});
const upload = multer({storage: fileStorageEngine})
app.post('/api/findJobs/form', upload.single('file'), function(req, res){
    const {email, name, file} = req.body;
    findJobsInfo.create({email, name, file}, function(err, data){
        if(err){
            res.status(500).send(err)
        }else{
            try {
                const subject = "Successful Submission" 
                const message = `<h2>Hi ${name}!</h2> <p>We have received your cv and will get back to you as soon as possible</P>
                <h3>Nesat </h3>`
                const sendTo = email
                const sendFrom = process.env.NESATemail
                const ReplyTo = email

                sendEmail(subject, message, sendTo, sendFrom, ReplyTo)
                res.status(201).send(data)

            } catch (error) {
                res.status(500).send(error.message)
            }
        }
    })
})
// Get teamMembers
app.get('/api/home/team/members', function(req,res){
    teamMembers.find(function(err, data){
        if(err){
            res.status(404).send(err)
        }else{
            res.status(200).send(data)
        }
    })
    .sort('-createdAt');
})
// Testimonia Get API
app.get('/api/home/testimonial', function(req, res){
    testimonyCard.find(function(err, data){
        if(err){
            res.status(404).send(err)
        }else{
            res.status(200).send(data)
        }
    }).sort('-createdAt');
})
// Get & Pagination API for blog Post
app.get('/api/blog/posts', async function(req, res){
    const Page_Size = 8;
    const Pages = parseInt(req.query.Pages || 0);
    const total = await blogPost.countDocuments({})

    const blogPosts = await blogPost.find({})
    .sort({createdAt : -1 })
    .limit(Page_Size)
    .skip(Page_Size * Pages);
    res.json({
        totalPages: Math.ceil(total / Page_Size),
        blogPosts,
    })
})

// Home blog get /api
app.get('/api/home/blog', function(req, res){
    blogPost.find(function(err, data){
        if(err){
            res.status(404).send(err)
        }else{
            res.status(200).send(data)
        }
    }).sort({createdAt : -1 })
})
// Getting Individual blog post API
app.get('/api/home/blog/post/:_id', function(req, res){

    const getById = req.params._id;
    blogPost.find(({_id:getById}), function(err, data){
        if(err){
            res.status(404).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

// Connecting to database
mongoose.connect(connectionURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})


app.listen(PORT,function(){
    console.log(`I am running on port ${PORT}`)
});