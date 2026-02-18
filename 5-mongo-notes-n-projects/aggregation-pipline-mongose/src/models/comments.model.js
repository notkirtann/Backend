import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const metadataSchema = new mongoose.Schema({
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    tags: [String]
}, { _id: false }); 

const postSchema = new mongoose.Schema({
    _id: {
        type: Number   
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    comments: [commentSchema],  
    metadata: metadataSchema
}, {
    timestamps: true
});

const Post = mongoose.model("Post", postSchema);

export default Post;
