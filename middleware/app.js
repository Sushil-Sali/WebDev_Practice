const express=require('express');
const Expreserror=require("./Expreserror")
const app=express();
const port=8080;

// app.use("/api",(req,res,next)=>{
//     let {token}=req.query
 
//     if(token ==="giveaccess"){
//         next();
//     }
//         res.send("faild")
    
// })

// middleware store as function in varible and pass
const checkToken=(req,res,next)=>{
    let {token}=req.query
 
    if(token ==="giveaccess"){
        next();
    }
        throw new Expreserror(401,"Access Denide") // throw to user define error
        
    
}


app.get("/api",checkToken,(req,res)=>{
    res.send("Data is send")
})

// Error-handling middleware

app.get('/home',(req,res)=>{
    abc=abc
})

app.use((err,req,res,next)=>{
    console.log('___Error___')
    next(err)
    // res.send(err)
})

// app.use((req,res)=>{
//     res.status(500).send("Page not found")
// })

app.listen(port,()=>{
console.log(`server runing on ${port}`)
})

