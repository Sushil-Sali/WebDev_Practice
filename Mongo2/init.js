const mongoose=require('mongoose');
const Chat=require('./models/chat.js');

let allchats=[
{
    from:"neha",
    to:"priya",
    msg:"chhannn",
    createdate:new Date()
},
{
    from:"Sushil",
    to:"Yogesh",
    msg:"hello bro",
    createdate:new Date()
},
{
    from:"Rushabh",
    to:"Sushil",
    msg:"Pav",
    createdate:new Date()
},
{
    from:"Sushil",
    to:"Rahul",
    msg:"Fikki Khichadi",
    createdate:new Date()
},
{
    from:"Rushi",
    to:"Sushil",
    msg:"balu",
    createdate:new Date()
}
];

Chat.insertMany(allchats); 