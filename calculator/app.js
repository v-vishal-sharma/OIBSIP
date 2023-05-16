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

function operand(n){
    stringExpression += n.toString();
    display(stringExpression);
}

function display(stringExpression){
    screen.innerHTML = stringExpression;
}


