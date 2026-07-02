for(let i=0;i<3;i++){
    let r=''
    for(let j=0;j<3;j++){
        if(i==0||i==2||j==0||j==2){
               r+=' *'
        }
        else{ 
            r+='  '
        }
     
    }
    console.log(r);
}
console.log('dd');