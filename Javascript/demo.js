// let obj=document.querySelectorAll("a");

// for(let i=0;i<obj.length;i++){
//     obj[i].style.color="Green";
// // }

// for (i of obj){
//     i.style.color="red";
// }

let p=document.createElement('p');

let h3=document.createElement('h3');

let div=document.createElement('div');

let body=document.querySelector('body');

body.append('div');

div.classList.add('div');
div.append('h3');
div.append('p');
h3.innerText="I am h3";
p.innerText=" i am p";


// let div=document.createElement('div');

// let h1=document.createElement('h1');

// let para2=document.createElement('p');

// h1.innerText="i am h1";
// para2.innerText="i am para";

// div.appendChild(h1);
// div.appendChild(para2);

// div.classList.add('set');

// let body=document.querySelector('body');
// body.append(div);

// let body=document.querySelector('body');

// let btn=document.createElement('button');
// let inpute=document.createElement('input');
// inpute.innerText="user input";
// btn.innerText="click Me!";
// body.prepend(inpute);
// body.append(btn);

// inpute.setAttribute('placeholder','username');
// btn.setAttribute('id','btn');

// let h1=document.createElement('h1');
// h1.innerText="dom practice";
// body.append(h1);


// let p=document.createElement('p');
// p.innerHTML='Apna college<b>delta</b>';
// body.append(p);


// let btn=document.createElement("button");
 
// btn.innerText="click Me!";

// let body=document.querySelector('body');

// body.append(btn);

// btn.onclick=function ss(){
//     alert('clicked');
// }

// function hover(){
//     console.log ('mouse enter');
// }

// // btn.onmouseenter=hover;
// let btn1=document.querySelectorAll('button');



// for(btns of btn1){
//     btns.addEventListener('click',ss);
//     btns.addEventListener('click',cast);
// }
// // btn.addEventListener('click',function(){
// //     alert('sali');
// // })
// function ss(){
//     alert('SushilSAli')
// }

// function rno(){
//     alert('49494');
// }

// function cast(){
//     alert('SAli');
// }


// genrate randome color
// let btn=document.querySelector('button');

// btn.addEventListener('click',function(){
 
//     let h3=document.querySelector('h3');
//     let genran=randomeno();
//     h3.innerText=genran;

//     let div=document.querySelector('div');
    
//     div.style.backgroundColor=genran;
// });


// function randomeno(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let color=`rgb ${red},${green},${blue}`;
//     return color;
// }

// let div=document.querySelector('div')

// let h3=document.querySelector('h3');

// let btn=document.querySelector('button');


// function changecolor(){
//     this.style.backgroundColor='blue';
// }
// h3.addEventListener('click',changecolor);
// btn.addEventListener('click',changecolor);
// div.addEventListener('click',changecolor);
// // div.addEventListener('mouseenter',function(){
// //     alert('Mouse inside box');
// // })


// let inp=document.querySelector('input');

// function type(event){
//   if (event.key=='u'){
//     console.log('Arrow Up');
//   }
// }

// inp.addEventListener('keydown',function(e){
//     // console.log("Key down");
//     console.log(e.key);
//     console.dir(e);
// });

// inp.addEventListener('keydown',type); 

// let form=document.querySelector('form');

// function submit(e){
//     e.preventDefault();
//     console.log('Submiteddd!');
// }

// form.addEventListener('submit',submit);


// Access to data of input elements

// let form=document.querySelector('form');

// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     let user=document.querySelector('#user');
//     console.dir(user);
//     let pass=document.querySelector('#pass');
//     console.log(user.value);
//     console.log(pass.value);
// });


//ANother way to repesent

// let form=document.querySelector('form');

// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     console.dir(form);
//     let user=this.elements[0];
//     let pass=this.elements[1];
//     let btn=this.elements[2];
//     console.log(user.value);
//     console.log(pass.value);
// });

// let form=document.querySelector('form');

// form.addEventListener('submit',function(e){
//     e.preventDefault();
// });

// let inp=document.querySelector('#user');

// // inp.addEventListener('change',function(){
// //  console.log("input changed");
// //  console.log(this.value);
// // });

// inp.addEventListener('input',function(){
//     console.log(this.value);
//     p.innerText=this.value;
// })

// let p=document.querySelector('p');

// let inp=document.querySelector('input');

// let h2=document.querySelector('h2');

// inp.addEventListener('input',function(){
//     h2.innerHTML=this.value;
// })

// let body=document.querySelector('body');

// let btn=document.createElement('button');

// body.appendChild(btn);

// btn.addEventListener('click',function(){
//     btn.style.backgroundColor='green';
// })


let btn=document.querySelector('button');

btn.addEventListener('mouseout',function(){
    console.log('mouse out');
});