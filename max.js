let readlineSync=require("readline-sync");
let num=readlineSync.question("enter the number--");
let num2=readlineSync.question("enter second number");
let num3=readlineSync.question("enter third number");
if(num>num2 && num>num3){
    console.log(num);
}else if(num2>num && num2>num3){
    console.log(num2);
}else{
    console.log(num3);
}