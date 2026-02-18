import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    values: {
        type: [Number],
        required: true
    }
}, {
    timestamps: true
});

const Document = mongoose.model("Document", documentSchema);

export default Document;
