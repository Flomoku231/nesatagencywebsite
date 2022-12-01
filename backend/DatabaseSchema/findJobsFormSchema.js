import mongoose from "mongoose"

const findJobsFormSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    file: {
        type: String,
        required: true,
        ticker: true
    }
}, {timestamps: true})

export default mongoose.model("findJobsInfo", findJobsFormSchema )