const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Chat = require('./models/chat.js');
const methodOverride = require('method-override');

let port = 8080;
let path = require('path');
const { AsyncLocalStorage } = require('async_hooks');
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

main().then(() => {
    console.log("Connection succefull");
})
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


// All chats route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find()
    res.render('index.ejs', { chats });
    // console.log(chats );
});

//New Chat
app.get('/chats/new', (req, res) => {
    res.render('new.ejs')
})

// Create and send new chat

app.post('/chats', (req, res) => {
    let { from, msg, to } = req.body;

    let newChats = new Chat({
        from:from,
        msg:msg,
        to:to,
        createdate: new Date(),
    });
    newChats.save().then((res) => { console.log(res) }).catch((err) => { console.log(err) })
    res.redirect('/chats');
});
// edit msg
app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id)
    res.render("edit.ejs",{chat});
});

// update route
app.put("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let {msg:newmsg}=req.body;
    let updatedChats=await Chat.findByIdAndUpdate(id,{msg:newmsg},{runValidators:true,new :true})
    res.redirect('/chats');
})
// Delete data
app.delete('/chats/:id',async(req,res)=>{
    let {id}=req.params;
    let result= await Chat.findByIdAndDelete(id)
    console.log(result)
    res.redirect("/chats");
})
app.get("/", (req, res) => {
    console.log('Get requ accepted');
    res.send("Get Response");
});

app.listen(port, () => {
    console.log(`Server runing on ${port}`);
});
