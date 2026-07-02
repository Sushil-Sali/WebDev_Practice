const express=require('express');
let app=express();
let port=8080;
let path=require('path');

app.use(express.urlencoded({extended:true}));
const { v4: uuidv4 } = require('uuid');
uuidv4();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

let info=[{
    id:uuidv4(),
    username:'Sushil',
    content:'Software engineer'
},
{   
        id:uuidv4(),
    username:'Yogesh',
    content:'Devloper'
},
{
        id:uuidv4(),
    username:'Jayesh',
    content:'Node engineer'
},
{
        id:uuidv4(),
    username:'Abhijeet',
    content:'Java Devloper'
},

];

app.get('/posts',(req,res)=>{
    res.render('index.ejs',{info});
});

app.get('/posts/new',(req,res)=>{
    res.render('new.ejs');
});

app.get('/posts/:id',(req,res)=>{
    let{id}=req.params;
    let post=info.find((p)=> id=== p.id);
    console.log({post})
    res.render('show.ejs',{post});
});

app.post('/posts',(req,res)=>{
   let {username,content} =req.body;
   let id= uuidv4()
    info.push({ id,username,content}); 
    res.redirect('/posts')
});

app.listen(port,()=>{
    console.log(`server runing on ${port}`);
});