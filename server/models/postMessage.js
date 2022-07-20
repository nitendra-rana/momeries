import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String, 
    message:String,
    creator:String, 
    tags:[String],
    selectedFile: String,
    likeCount: {
        type: Number,
        Default: 0
    },
    createdAt:{
        type:Date,  
        default: new Date()
    },

});

const PostMessage = mongoose.model('PosTMessage',postSchema);

export default PostMessage;