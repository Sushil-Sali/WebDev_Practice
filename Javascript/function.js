// function dias(){
//     let random=Math.floor(Math.random()*10)+10;
//     console.log(random);
// }

// dias();
// dias();


// Calculate avrage

// function avg(a,b,c){
//     let tot=(a+b+c)/3;
//     console.log(tot);
// }

// avg(10,20,30);

// print table of n

// function table(n){
//     for(let i=n;i<=n*10;i+=n){
//         console.log(i);
//     }
// }
// table(5);


// Return 1 to n num of sum

// function sum(n){
//     let s=0;
//     for(let i=1;i<=n;i++){
//          s+=i;
//     }
//     return s;
// }

// console.log(sum(3));

// concate the string array using return keyword

// let str=['hi','hello','by','!'];

// function concate(str){
//     let result="";
//     for(let i=0;i<str.length;i++){
//         result+=str[i];
//     }
//     return result;
// }

// console.log(concate(str));

// let a=function(){
//     console.log("hello");
// }
// a();



//  Higher order function

// let greet=function(){
//     console.log("hello");
// }


// function multi(func,count){
//     for(i=1;i<=count ;i++){
//         func();
//     }
// }
// multi(greet,10)



// function oddoreven(req){
//   if(req=='odd'){
//     let odd=function(n){
//         console.log(!(n%2==0));
//     }
//     return odd();
//   }
  
//   else if(req=='even'){
//     let even=function(n){
//         console.log(n%2==0);
//     }
//     return even();
//   }
// }

// let req='odd';

// let abc=oddoreven(req);


// const cal={
// add(a,b){
//     return a+b;
// },
// sub(a,b){
//     return a+b;
// }
// };


// this keyword

const stud={
name:'sushil',
math:90,
phy:70,
chem:67,
getavg(){
console.log(this);
let avg= (this.math+this.phy+this.chem) / 3;
console.log(`${this.name} 's ${avg}`);
}
};


