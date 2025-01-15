const mongoose = require("mongoose")
const Chat = require('./models/chat.js')
main()
.then((res)=>console.log("connected to Mongoose database"))
.catch((err)=>console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}
let allChat = [
    {
        msg:"chal kaha chalna hai",
        from:"Shivam2",
        to:"Aditiya",
        created_at:new Date()
    },
    {
        msg:"chal re motka khana khaye",
        from:"Tabrez",
        to:"Praveen",
        created_at:new Date()
    },
    {
        msg:"Chalo dewdi",
        from:"Shivam",
        to:"Vikram",
        created_at:new Date()
    },
    {
        msg:"mai to nhi jaunga",
        from:"Aditiya",
        to:"Digamber",
        created_at:new Date()
    },
]
Chat.insertMany(allChat)
