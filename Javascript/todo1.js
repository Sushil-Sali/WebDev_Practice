let btn=document.querySelector('button');
let inp=document.querySelector('input');
let ul=document.querySelector('ul');
btn.addEventListener('click',function(){
    let items=document.createElement('li');
    items.innerText=inp.value;
    ul.appendChild(items);
    let delbtn=document.createElement('button');
    delbtn.innerText="delete";
    delbtn.classList.add('delete');
    items.appendChild(delbtn);
    inp.value="";
})

ul.addEventListener('click',function(event){
if(event.target.nodeName == 'BUTTON'){
    let list=event.target.parentElement;
    list.remove();
}

})
// let delbtns=document.querySelectorAll('.delete');

//     for(del of delbtns){
//         del.addEventListener('click',function(){
//          let par=this.parentElement;
//          par.remove();
//         })
//     }