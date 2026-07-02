const express=require('express');
const app=express();
const port=8080;
//1st middleware
app.use("/",(req,res,next)=>{
    console.log('Hi i am middleware')
    next()
})

// Logger middleware
// app.use("/",(req,res,next)=>{
//     req.time=Date(Date.now()).toString()
//     console.log(req.path,req.method,req.host,req.time)
//     next()
// })

//The middleware working only specified path
app.use('/random',(req,res,next)=>{
    console.log("HEllo i am working only random routs");
    next()
})

// app.get('/',(req,res)=>{
//     res.send("Home route")
// })

// Random route
app.get('/random',(req,res)=>{
    res.send("It's random route");
})

app.listen(port,()=>{
    console.log(`server runing on ${port}`)
})

// It's last for this bcz any math not fond for server that time send resonse
app.use((req,res)=>{
    res.status(404).send('Page Not found')
})