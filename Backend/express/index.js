let express=require('express');
let app=express()
let port=3000
app.listen(port,()=>{
console.log(`Listening on port ${port}`)
});

// without Routs (Default run )

// app.use((req,res)=>{
//     // console.log(req)
//     console.log("request recived .")
//     // res.send("This is my first respone :")
//     // res.send("<h1>Fruits</h1>")
//     res.send(fruits={name:'Apple',
//         color:'Red',
//         shape:'Oval'
//     })
// })

// with GET
// app.get('/',(req,res)=>{
//     console.log('request recived.')
//     res.send("This is rott :")
// })

// app.get('/fruits',(req,res)=>{
//     console.log('request recived.')
//     res.send("<h1>Fruits</h1>")
// })

// app.get('/home',(req,res)=>{
//     console.log('request recived.')
//     res.send("This is first response :")
// })


// app.get('/apple',(req,res)=>{
//     console.log('request recived.')
//     res.send(apple={
//         name:'pple',
//         color:'red'
//     })
// })
// app.get('/orange',(req,res)=>{
//     console.log('request recived.')
//     res.send(orange={name:'Orange',
//         color:'Orange',
//         shape:'Oval'
//     })
// })

// app.get('*',(req,res)=>{
//     res.send("The path not availabele");
// });


// with path parameter

// app.get('/',(req,res)=>{
//     console.log('request recived.')
//     res.send("This is root:")
// })

// app.get('/:username/:id',(req,res)=>{
//     //console.log(req.params)
//     let {username,id}=req.params;
// //   res.send(`this is root ${username}` );
//    let htmls=`<h1>${username}</h1>`
//    res.send(htmls)
// });

// Queurey string e.g(localhost:3000/search?q='mango')

app.get('/search',(req,res)=>{
    // console.log(req.query)
    let {q}=req.query
    let htmls=`<h1>${q}</h1>`
    res.send(htmls)
    // res.send(`succes ${q}`)
})


