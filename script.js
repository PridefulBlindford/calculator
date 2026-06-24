function add(firstNumber,secondNumber){
    return firstNumber+secondNumber;
}

function subtract(firstNumber,secondNumber){
    return firstNumber-secondNumber;
}

function multiply(firstNumber,secondNumber){
    return firstNumber*secondNumber;
}

function divide(firstNumber,secondNumber){
    if(secondNumber===0){
        return "oops, can't do that! Dividing by 0 is not allowed.";
    }
    return firstNumber/secondNumber;
}

console.log(add(2,2));
console.log(subtract(10,5));
console.log(multiply(20,4));
console.log(divide(10,0));
console.log(divide(10,1));