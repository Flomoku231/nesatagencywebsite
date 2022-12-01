import mongoose from 'mongoose';

const teamSchema = mongoose.Schema({
    teamImageUrl: String,
    name: String,
    position: String,
}, { timestamps: true })

export default mongoose.model('teamMembers', teamSchema)