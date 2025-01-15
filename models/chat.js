const mongoose = require("mongoose")

const chatSchema = mongoose.Schema({
    msg:{
        type:String,
        maxLength:50,
        // required : true,
    },
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    created_at:{
        type: Date,
        required:true
    }

})
const Chat = mongoose.model('chat',chatSchema)
module.exports = Chat