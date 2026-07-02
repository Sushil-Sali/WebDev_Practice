// protype example

// let arr1=[1,2,3];
// let arr2=[1,2,3];

// arr1.sayhello=()=>{
//     console.log('helo')  
// };

// arr2.sayhello=()=>{
//     console.log('helo')  
// };


// factory function e.g store multiple sudent informations

// function personMaker(name,age){
//     const person={
//         name:name
//         ,age:age
//     };
//     return person
// }

// let p1=personMaker('sush',123)
// let p2=personMaker('Ypgesh',1234)

// console.log(p1)
// console.log(p2)//but this factory function have consume more memory like p1 point another memory p2 point another memory


// NEW OPERATOR (COUNSTRUCTER)

// function Person(name,age){
//    this.name=name;
//     this.age=age;
// }

// With prototype
// Person.prototype.talk=function(){
//     console.log('Hello my name is ',this.name)
// }

// let p1=new Person('Sushil',22)
// let p2=new Person('Rahul',21)

// console.log(p1)
// console.log(p2)
// console.log(p1.talk===p2.talk)

// Class and constructer 

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=name;
//     }
//     talk(){
//         console.log("hello my name is :");
//     }
// }

// let p1=new Person("Sushil",22)
// let p2=new Person("Rahul",22)

// console.log(p1)
// console.log(p1.talk===p2.talk)


// Inheritance

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//         console.log("Parent  Construter :")

//     }
//     talk(){
//         console.log(`hi may name is ${this.name} and my age is ${this.age}`)
//     }
// }
// class Studnt extends Person{
//     constructor(name,age,marks){
//         super(name,age);
//         this.marks=marks;
//         console.log("Stusent Construter :")
//     }
// }

// let s1=new Studnt("Sushil",22,94);
// console.log(s1)