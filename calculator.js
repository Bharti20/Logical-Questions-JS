function add(num, num2){
    return num + num2
}

function substract(num, num2){
    return num - num2
}
function multiply(num, num2){
    return num*num2
}
function calculator(number, number2, operator){
    if(operator=="+"){
        console.log(add(number, number2))
    }else if(operator=="-"){
        console.log(substract(number, number2))
    }else if (operator=="*"){
        console.log(multiply(number, number2))
    }
}
calculator(2, 4, "+")