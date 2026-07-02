const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Succefull conection"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
//parent
let userSchema = new Schema({
  username: String,
  email: String,
});
//child
let postSchema = new Schema({
  content: String,
  likes:Number,
  user:[{ type:Schema.Types.ObjectId, 
    ref: "User" }] ,
});

const User = mongoose.model("User", userSchema);
const Post=mongoose.model("Post",postSchema);

const addData=async()=>{
    // let user1=new User({
    //     username:"SushilKumar",email:"sushilkumar@gmail.com"
    // })
     let user1=await User.find({username:"SushilKumar"})

    let post2=new Post({content:"buddy",likes:98})
    // console.log(user1)
    post2.user=user1
//   console.log(post2.user)
        let res=await post2.save();

   console.log(res)
   

}
addData()