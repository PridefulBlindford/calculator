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
let one=document.querySelector(".one");
let two=document.querySelector(".two");
let three=document.querySelector(".three");
let four=document.querySelector(".four");
let five=document.querySelector(".five");
let six=document.querySelector(".six");
let seven=document.querySelector(".seven");
let eight=document.querySelector(".eight");
let nine=document.querySelector(".nine");
let zero=document.querySelector(".zero");
let plus=document.querySelector(".plus");
let minus=document.querySelector(".minus");
let product=document.querySelector(".product");
let division=document.querySelector(".division");
let equals=document.querySelector(".equals");
let clear=document.querySelector(".clear");

let firstNumber="";
let secondNumber="";
let operator="";
let display="";
function operate(firstNumber,secondNumber,operator){
    let result;
    if(operator==="+"){
        result=add(firstNumber,secondNumber);
    }
    else if(operator==="-"){
        result=subtract(firstNumber,secondNumber);
    }
    else if(operator==="*"){
        result=multiply(firstNumber,secondNumber);
    }
    else if(operator==="/"){
        return divide(firstNumber,secondNumber);

    }
    else{
        result="error";
    }
    return result;
}

let displayArea=document.querySelector("#display");
let result=document.createElement("p");

displayArea.appendChild(result);
one.addEventListener("click",()=>{
    if(operator.length!==0){
        secondNumber+="1";
        result.textContent+="1";
    }
    else{
        firstNumber+="1";
        result.textContent+="1";
    }
});
two.addEventListener("click",()=>{
    if(operator.length!==0){
        secondNumber+="2";
        dresult.textContent+="2";
    }
    else{
        firstNumber+="2";
        result+="2";
    }
});
three.addEventListener("click",()=>{
    if(operator.length!==0){
        secondNumber+="3";
        result+="3";
    }
    else{
        firstNumber+="3";
        result.textContent+="3";
    }
});
four.addEventListener("click",()=>{
    if(operator.length!==0){
        secondNumber+="4";
        result.textContent+="4";
    }
    else{
        firstNumber+="4";
        result.textContent+="4";
    }
});
five.addEventListener("click",()=>{
    if(operator.length!==0){
        secondNumber+="5";
        result.textContent+="5";
    }
    else{
        firstNumber+="5";
        result.textContent+="5";
    }
});
six.addEventListener("click",()=>{
    if(operator.length!==0){
        secondNumber+="6";
        result.textContent+="6";
    }
    else{
        firstNumber+="6";
        result.textContent+="6";
    }
});
seven.addEventListener("click",()=>{
    if(operator.length!==0){
        secondNumber+="7"
        dresult.textContent+="7";
    }
    else{
        firstNumber+="7";
        result.textContent+="7";
    }
});
eight.addEventListener("click",()=>{
    if(operator.elgnth!==0){
        secondNumber+="8";
        result.textContent+="8";
    }
    else{
        firstNumber+="8";
        result.textContent+="8";
    }
});
nine.addEventListener("click",()=>{
    if(operator.length!==0){
        secondNumber+="9";
        result.textContent+="9";
    }
    else{
        firstNumber+="9";
        result.textContent+="9";
    }
});
zero.addEventListener("click",()=>{
    if(operator.length!==0){
        secondNumber+="0";
        result.textContent+="0";
    }
    else{
        firstNumber+="0";
        result.textcontent+="0";
    }
});
clear.addEventListener("click",()=>{
    result.textContent="";
    firstNumber="";
    operator="";
    secondNumber="";
});
plus.addEventListener("click",()=>{
    operator+="+";
    result.textContent+="+";
});
minus.addEventListener("click",()=>{
    operator+="-";
    result.textContent+="-";
});
product.addEventListener("click",()=>{
    operator+="*";
    result.textContent+="*";
});
division.addEventListener("click",()=>{
    operator+="/";
    result.textContent+="/";
});
equals.addEventListener("click",()=>{
    if(Number.parseInt(firstNumber)===NaN){
        result.textContent="error";
        return;
    }
    let result=operate(Number(firstNumber),Number(secondNumber),operator);
    result.textContent=String(result);
    firstNumber=result.textContent;
    operator="";
    secondNumber="";
})