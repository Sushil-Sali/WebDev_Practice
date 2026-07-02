app.get('/',(req,res)=>{
    console.log('request recived.')
    res.send("This is root:")
})
