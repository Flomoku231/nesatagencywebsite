import mongoose from 'mongoose';

const blogPostSchema = mongoose.Schema({
    postImageURL:{
        type: String,
        required: true
    },
    postDate:{
        type: String,
        default: ()=> new Date().toDateString()
    }, 
    postTitle:{
        type: String,
        required: true
    },
    postDescription: {
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model('blogPost', blogPostSchema)