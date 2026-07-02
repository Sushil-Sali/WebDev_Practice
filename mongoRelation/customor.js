const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
  .then(() => console.log("Succefull conection"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

let orderSchema = new Schema({
  item: String,
  price: Number,
});

let custmourSchema = new Schema({
  name: String,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});

const Order = mongoose.model("Order", orderSchema);
const Custmour=mongoose.model("Custmour",custmourSchema);

//mongoose middleware 
custmourSchema.post('findOneAndDelete', async (custmour)=> {
  if(custmour.orders.length){
   let res=await Order.deleteMany({_id:{$in : custmour.orders}});
   console.log(res)
  }
});

// // const addOrder = async () => {
// //   let res =await Order.insertMany(
// // [    { item: "choklate", price: 45 },
// //     { item: "popcorn", price: 10 },
// //     { item: "cheeps", price: 10 },
// //     { item: "biskut", price: 20 }]
// //   );
// //   console.log(res)
// // };
// // addOrder()

// const addcust=async()=>{
//     let cust1=new Custmour({
//         name:"Sushil",
//     })

//     // cust1.orders.push(order1)
//     // cust1.orders.push(order2)
 
//   let order3=await Order.findOne({  item: 'choklate', price: 45})
//    cust1.orders.push(order3)
//     let result= await cust1.save();
//     console.log(result)
//   }
// addcust();

// // const findCustmour=async ()=>{
// //     let result=await Custmour.find().populate('orders')
// //     console.log(result[0])
// // }
// // findCustmour()

//Delete user

const deletecust=async()=>{
 let data= await Custmour.findByIdAndDelete("68c17e1f032f85bba62871d1");
 console.log(data)
}
// deletecust()