import mongoose from "mongoose";

const colSchema = new mongoose.Schema({
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

const Document = mongoose.model("Document", colSchema);

export default Document;
