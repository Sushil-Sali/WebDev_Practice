const mongoose = require('mongoose');
main()
.then((res)=>{
    console.log("Connection success");
})
.catch((err) => console.log(err));
//conection mongodb to js
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
};

// Create Schema of mongo db

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User=new mongoose.model("User",userSchema); //User is class It is create collection in mongodb

// // Insert row with help of User class we are create object User class and insert singl row in mongodb

// const user1=new User({name:"adam",email:"adam@gamil.com",age:22});

// // // the line save the document in database

// user1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     conole.log(err);
// })

// // Insernt multiple rows 

// User.insertMany([{name:'yogesh',email:'yogesh@gmail.com',age:22},
//     {name:'yogesh',email:'yogesh@gmail.com',age:22}
// ]).then((res)=>{
//     console.log(res);
// })

// // Find all data

// User.find().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// // find using id

// User.findById('68655687ac88580c55119503').then((res)=>{
//     console.log(res)})
//     .catch((err)=>{
//     console.log(err);
// });

// // Update one

// User.updateOne({name:"yogesh"},{age:23}).then((res)=>{
//     console.log(res);
// })


// // update many

// User.updateMany({name:"yogesh"},{age:24}).then((res)=>{
//     console.log(res);
// })

// // using id

// User.findByIdAndUpdate({_id:"68655687ac88580c55119502"},{age:25},{new:true}).then((res)=>{
//     console.log(res);
// })

//Delete item