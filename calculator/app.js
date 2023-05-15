let isOperatorChosen = false;
let firstOperand=0;
let secondOperand=0;
let grandExpression;
const screen = document.getElementById("calculations");

function operatorChosen(value){
    isOperatorChosen = value;
}

function operand(n){
    console.log("clicked");
    if (isOperatorChosen == false){
        firstOperand = (firstOperand*10) + n;
    }else{
        secondOperand = (secondOperand*10) + n;
    }
    display(firstOperand,secondOperand);
}

function display(firstOperand,secondOperand){
    grandExpression = firstOperand.toString() + secondOperand.toString();
    screen.innerHTML = grandExpression;
}
