let todo=[];
let req=prompt("Enter your request");

while(true){
    if(req=='exit'){
        console.log("your are in exit!!");
        break;
    }
    else if(req=='list'){
        console.log("------------------------");

        for(let i=0 ;i<todo.length; i++)
         {
            console.log(i,todo[i]);
        }

        console.log("------------------------");
    }
    else if(req=='add'){
        let task=prompt("Enter your task..!!");
        todo.push(task);
        console.log("Task Added..");
    }
    else if(req=='delete'){
        let ind=prompt("Enter the index no can be delete");
        todo.splice(ind,1);
        console.log("Task Deleted..");
    }
    else{
        console.log('Wrong request');
    }
    req=prompt("Enter your request");
}
