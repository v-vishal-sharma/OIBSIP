let isOperatorChosen = false;
let firstOperand = 0;
let secondOperand = 0;

function operand(n){
    console.log("clicked");
    if (isOperatorChosen == false){
        firstOperand = (firstOperand*10) + n;
        console.log(firstOperand);
    }else{
        secondOperand = (secondOperand*10) + n;
    }
}
