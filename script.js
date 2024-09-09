const max = prompt("Enter your max number");
const random = Math.floor(Math.random()*max) +1;

let guess = prompt("Guess your number");
while(true){
    if(guess == "quit"){
        console.log("You are quitting this game");
        break;
    }

    if(guess == random){
        console.log("Your guess is right congrats")
        break;
    }
    else if(guess < random){
       guess = prompt("your guess is to smalll")
    }else{
        guess = prompt("your guess is to large")
    }
}
