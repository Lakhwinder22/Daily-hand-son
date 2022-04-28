console.log("working");

// function = In order to execute a particular  lines of code repetitiviely, we can allocate them into a function, which can then be called again as required. This prevents us writing a place of code multiple times.

//function definition from lines 6-8
//we need to have n no of parameters for n number of arguments passed while calling the functions, so parameters catch the arguments in the sequence they are passed
// function multiply(parameter1, parameter2){
//     console.log("Inside multiply function");
//     //the function body can have more than one line of code.
// }

//function calling on line 11
// multiply(arg1,arg2);//name of a function followed by open and close parenthesis.
// //while we call a function we pass arguments inside the parenthesis, if we have to pass any values otherwise not necessary to pass arguments. The arguments passed can be one or many separated by commas.


// Arrow function---
// const addition =(parameter1,parameter2) => {
//     console.log("I am in addition function");
// }
// addition(arg1,arg2);

// function Expression 
// const subtraction = function(parameter1,parameter2){
//     console.log("I am in subtraction function");
// }
// subtraction(arg1.arg2);

// function sayHi(){
//     console.log("Hi!!!");
//     let a=3;
//     let b=6;
//     let result = a+b;
//     console.log(result)
// }
// sayHi();

// function addition(number1, number2){
//     let result = number1+number2;
//     return result;
// }

// function multiply(number1,number2){
//     let result = number1*number2;
//     return result;
// }

// let returnedResult = multiply(7,9);
// console.log(returnedResult);

// console.log(multiply(7,9));  // inside the console.log we can call a function... no issues....
// If our function which is called returns some value, then that returned value will also be printed in our console.log.

// The Lexical Environment and Scope Chain

// let i = 5;

// function one (){
//     console.log(i);
//      two();
//     function two (){
//         console.log(i);
//     }
// }
// one();

// Block Scope and Shadowing

let f = 2;
const g = 2;
var h = 2;
 console.log(f);
 console.log(g);
 console.log(h);
//  Let and const are block scoped but not var (globally scoped)

{
    let f = 3;
    const g = 3;
    var h = 3;
    console.log(f);
    console.log(g);
    console.log(h);
}
console.log(f);
console.log(g);
console.log(h);

// let m = 4;
// console.log(m);//4
// {
//     let m= 5
//     console.log(m);//5

// }
// console.log(m);//4

// const n = 4;
// console.log(n);//4
// {
//     const n= 5
//     console.log(n);//5

// }
// console.log(n);//4




