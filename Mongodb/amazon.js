const mongoose=require('mongoose');

main()
.then((res)=>{
    console.log("Connection success");
})
.catch((err) => console.log(err));
//conection mongodb to js
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazone');
};

const booksSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String
    },
    price:{
        type:Number
    }
});

const Book=new mongoose.model("Books",booksSchema);

const book1=new Book({title:"Math",price:1220});
book1.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    conole.log(err);
});