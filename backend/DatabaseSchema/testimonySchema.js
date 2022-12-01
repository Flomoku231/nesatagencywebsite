import mongoose from 'mongoose'

const testimoniesSchema = mongoose.Schema({
    ImageUrl: String,
    Description: String,
    Name: String,
    Position: String,
}, { timestamps: true })

export default mongoose.model('testimonyCard', testimoniesSchema)