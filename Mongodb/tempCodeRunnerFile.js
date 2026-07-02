
// Update one

User.updateOne({name:"yogesh"},{age:23}).then((res)=>{
    console.log(res);
})


// update many

User.updateMany({name:"yogesh"},{age:24}).then((res)=>{
    console.log(res);
})

// using id

User.findByIdAndUpdate({_id:"68655687ac88580c55119502"},{age:25},{new:true}).then((res)=>{
    console.log(res);
})

