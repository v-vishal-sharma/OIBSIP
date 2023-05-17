const screen = document.getElementById("calculations");
const resultScreen = document.getElementById("result");
let stringExpression="";
let lengthOfExpression;


function displayAnswer(){
    result.innerHTML = "";
    result.innerHTML = eval(stringExpression);
}

function clearDisplay(){
    screen.innerHTML = "";
    result.innerHTML = "";
    stringExpression = "";
}

function del(){
    lengthOfExpression = stringExpression.length;
    stringExpression = stringExpression.slice(0,lengthOfExpression-1);
    display(stringExpression);
}

function signInt(){
    if(stringExpression.includes("-")){
        stringExpression = stringExpression.slice(1,lengthOfExpression);
        display(stringExpression);
    }
    else{
        stringExpression = "-"+stringExpression;
        display(stringExpression);
    }
}

function operand(n){
    stringExpression += n.toString();
    display(stringExpression);
}

function display(stringExpression){
    screen.innerHTML = stringExpression;
}


