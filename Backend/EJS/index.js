const express=require('express')
let app=express()
let port=3000
let path=require('path')

app.use(express.static(path.join(__dirname,("/public"))));
app.set('views',path.join(__dirname,"/views"));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    console.log("Request recived");
    res.render('index.ejs')
})

// app.get('/home',(req,res)=>{
//     console.log("Request recived");
//     res.send('lalitalanjjdfdf')
// })

app.listen(3000,()=>{
    console.log(`Serrver runing on ${port}`)
})

app.get('/rolldies',(req,res)=>{
    let diese=Math.floor(Math.random()*6)+1
    res.render('rolldies.ejs',{diese})
})

// app.get('/instagram/:username',(req,res)=>{
//     let followers=['Hitesh','Rushabh','Jayesh','Rahul','Rushikesh','Uday']
//     let {username}=req.params
//     res.render('instagram.ejs',{username,followers})
// })

app.get('/:username',(req,res)=>{
    const instadata=require('./data.json')
    let {username}=req.params
    let data=instadata[username]
    console.log(data)
    if (data){    
        res.render('insta.ejs',{data}) 
    }
    else{
        res.render('no.ejs',{username}) 
    }

});