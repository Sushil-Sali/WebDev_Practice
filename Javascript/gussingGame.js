const max=prompt("Enter the Maximum value..");
const random=Math.floor(Math.random()*max)+1;

let guess=prompt("Guess the number");

while(true){
    if(guess=='exit'){  
     console.log("Your are in exit!!");
     break;
    }
    else if(random==guess){
        console.log("Your choise is Correct !! Number is ",random);
        break;
    }
    else if(guess>random){
        guess=prompt("Hint!!....Your number is large,please try to small no");
    }
    else{
        guess=prompt("Hint!!....Your no is small, please try large no");
    }
    // else{
    //     guess=prompt("Your choise is wrong please try again");
    // }
}

