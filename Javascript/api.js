// // let jsonRes =
// //   '{"fact":"Cats have individual preferences for scratching surfaces and angles. Some are horizontal scratchers while others exercise their claws vertically.","length":145}';

// // //   console.log(jsonRes.fact)
// // let validRes=JSON.parse(jsonRes);
// // console.log(validRes)

// // let jsondata=JSON.stringify(validRes);
// // console.log(jsondata)



// // let student={
// //     name:'sush',
// //     rollno :101
// // };



// //OUR first request using fetch

// let url="https://catfact.ninja/fact";

// // fetch(url).then((res)=>{
// //   console.log(res);
// //   return res.json();
// // })

// // .then((data)=>{
  
// //   console.log(data.fact);
// // })
// // .catch((err)=>{
// //   console.log(err);
// // })

// async function getdat() {
//   let res=await axios.get(url);
//   console.log(res.data);
// }


for(let i=0;i<3;i++){
  let row=""
  for(let j=0;j<3;j++){
    row+="*"
  }
  console.log(row)
}