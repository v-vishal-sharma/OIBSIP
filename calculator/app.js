const screen = document.getElementById("calculations");
let stringExpression="";
let lengthOfExpression;


function displayAnswer(){
    screen.innerHTML = "";
    screen.innerHTML = eval(stringExpression);
}

function clearDisplay(){
    screen.innerHTML = "";
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


