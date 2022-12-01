import mongoose from 'mongoose';

const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    message: String
}, {timestamps: true})

export default mongoose.model('contactForm', contactUsSchema)