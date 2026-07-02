// Calling to multiple fuction 
// console.log("Step 1...");
// function hello(){
//     console.log("I am inside hello");
//     console.log("Heloo ji");
// }

// function demo(){
//     console.log("Demo hain hm");
//     hello();
//     console.log("netxt to demo");
// }
// console.log("Outside all blocks");

// demo();

// console.log("byyyy!")



// Visualizing to callSTACK


    // function one(){
    //     return 1;
    // }


    // function two(){
    //     return one()+one();
    // }
    

    // function three(){
    //     let ans= two()+one();
    //     console.log(ans);
    // }

    // three();


    // Callback hell

    let h1=document.querySelector('h1');
    // h1.style.color="red";

    // setTimeout(()=>{
    //     h1.style.color='red';
    // },2000);

    // function changecolor(color,delay,nx){
    //     setTimeout(()=>{
    //         h1.style.color=color
    //         nx();
    //     },delay)
    // }

    // changecolor('red',1000,()=>{
    //     changecolor('blue',1000,()=>{
    //         changecolor('green',1000)
    //     });
    // });


    // Promises

    // function savedata(data,success,failed){
    //     let speed=Math.floor(Math.random()*10)+1;
    //     if(speed>4){
    //         success();
    //     }
    //     else{
    //         failed();
    //     }
    // }

    // savedata("sushil sali",()=>{
    //     console.log('sussss');
    // },()=>{
    //     console.log('faill')
    // });



//     function savedb(data){
//         return new Promise((resoved,reject)=>{
//             let internetspeed=Math.floor(Math.random()*10)+1;
//             if(internetspeed > 4){
//                 resoved('Success to store dtabase');
//             }
//             else{
//                 reject("failed week conction");
//             }
//         })
//     }

// savedb('Ssass')
// .then((result)=>{
//     console.log("data 1saved");
//     console.log(result)
//     return savedb('Sali');
// })
// .then((result)=>{
//     console.log("data2 saved");
//     console.log(result)
//     return savedb('sdsdsd');
// })
// .then((result)=>{
//     console.log('data 3 saved')
//     console.log(result)
// })
// .catch((error)=>{
//     console.log("failed");
//     console.log(error);
// })

function changecolor(color,delay){
    return new Promise((resoved,reject)=>{  
        setTimeout(()=>{
        h1.style.color=color;
        resoved();
    },delay)
});
  
}

async function greet() {
    await changecolor('red',1000);
    await changecolor('blue',1000);
     changecolor('green',1000);
}
