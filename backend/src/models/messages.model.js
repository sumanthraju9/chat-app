
import mongoose from "mongoose";

const messageSchema = mongoose.Schema({

    senderId:{
        type: mongoose.Schema.Types.ObjectId
,
        ref:"User",
        required:true

    },
    receiverId:{

        type: mongoose.Schema.Types.ObjectId
        ,
        ref:"User",
        required:true
    },

    text:{
        type:String,

    },
    images:{
        type:String
    }
},
     {timestamps:true}
);

const Messages= mongoose.model("Message",messageSchema);

export default Messages;