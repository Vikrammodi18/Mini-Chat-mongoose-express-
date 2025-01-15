const express = require('express')
const mongoose = require('mongoose')
const path = require("path")
const Chat = require('./models/chat.js')
const app = express()

main().then((res)=>console.log("connected to Mongoose database"))
.catch((err)=>console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

app.use(express.static('public'))
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))


const port = 3000
app.get('/',(req,res)=>{
    res.send("page runing")
})
//index route
app.get('/chats',async(req,res)=>{
    let chats = await Chat.find({})
    res.render('index',{chats})
    // console.log(chats)
})
//create route
app.get('/chats/new',(req,res)=>{
    res.render('new.ejs')
})
//submit new chat to db
app.post('/chats',async(req,res)=>{
    const{from,to,msg} = req.body
    console.log(from,to,msg)
    let newChat = await Chat({
        to:to,
        from:from,
        msg:msg,
        created_at:new Date()
    })
    newChat.save().then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    res.redirect('/chats')
})
app.listen(port,(req,res)=>{
    console.log(`app is runing at port${port}`)
})