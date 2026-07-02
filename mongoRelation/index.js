const mongoose = require('mongoose');
const { Schema } = mongoose;

main()
.then(()=>(console.log('Succefull conection')))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

let userSchema=new Schema({
    username:String,
    address:[{
        _id:false,
        location:String,
        city:String
    }]
})

const User= mongoose.model('User',userSchema);

const addUser=async()=>{
    let user1=new User({
        username:"SherlockHomes",
        address:[{
            location:"221 b baker point street",
            city:"london"
        }]
    })
    user1.address.push({location:"shivaji nagar",city:"Amalner"})
    let result=await user1.save()
    console.log(result)
}
addUser()