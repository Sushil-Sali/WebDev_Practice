const { json } = require('body-parser');
const express=require('express')
const app=express()

const port=8080

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get('/register',(req,res) =>{
    let {user,password }=req.query;

    console.log(user)
    res.send(`Get respones ${user}`);
});

app.post('/register',(req,res)=>{
    let {user,password}=req.body

    res.send(`post Reponse ${user}`);
});

app.listen(port,()=>{
    console.log('Server running on port',port)
});