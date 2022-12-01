import mongoose from 'mongoose';

const newsLetterSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        required: true
    }
},{timestamps: true})

export default mongoose.model('newsLetter', newsLetterSchema);