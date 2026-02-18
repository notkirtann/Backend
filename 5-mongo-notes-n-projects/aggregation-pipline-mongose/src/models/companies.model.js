import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    logo: {
        type: String,
        trim: true,
        default: ""   
    }
}, {
    timestamps: true 
});

const Company = mongoose.model('Company', companySchema);

export default Company;
