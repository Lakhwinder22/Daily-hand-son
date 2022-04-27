console.log("working");
// Hoisting-> Its only supported with that of var keywords and with the function. Let and const keywords donot support hoisting.

// console.log(game); variable not declared so that is not defined.

// Let keywords variables cannot be accesssed before declaration/initializition.
// console.log(game); // Reference Error cannot access "game" before initialization.
// let game1 = "cricket"
// // var Keywords variable are hoisted.
// console.log(gamer2); // undefiend.
// var gamer2;
// gamer2 = Badmintion
// console.log(gamer2); // Badminition

// Note: for var keywords variables, if we try to access them before assigning values to the will give us undefined but the moment we declare a value to it, it will give us the assigned value.
// Hositing in function=>
// add(3,4);
// // Function add(a,b){ // Arguments
// let result = a+b;
// console.log(result);
// console.log(hello add function)
// }
// Hoisting in functions:
// functions are hoisted because of which we can call the function before declaring the function.

//Arithmetic Operators
//+, -, /, *, %

//modulas - It gives us the remainder
console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 / 3);
console.log(2 % 3);

//comparision operators
//==/!= only check the values and not the data types but ===/!== checks both the values and the datatypes

//< , > , <=, >=, ==, ===
console.log(2<3);//true(boolean values as answer)
//console.log(2>3);//false
//console.log(2>=3);//false
//console.log(2<=3);//true

console.log(2!=3);//false
console.log(2!=2);//false
console.log(2!==2);//false
console.log(2==2);//true
console.log(2===2);//true
console.log(2=="2");//true
console.log(2==="2");//false
//Logical operators
//||, &&, !
console.log(2||3);//2
console.log(0||3);//3
console.log(0||0);//0

console.log(1 && 3);//3
console.log(0 && 3);//0
console.log(1 && 0);//0

console.log(!0)//true
console.log(!1)//false
console.log(!2)//false

//increment decrement operators

let a = 1;
a++;//a = a+1
console.log(a);//2
a--;//a = a-1
console.log(a);//1
//a = 1
console.log(a++);//1//i will first print the value of a, and then increment its value with 1 which will be reflected/shown in next line,not on the same line
console.log(a);//2

console.log(a--);//1//i will first print the value of a, and then increment its value with 1 which will be reflected/shown in next line,not on the same line
console.log(a);//0
let b = 2;
a*=3; // b=b*3
b/=3; // b = b/3;
b+=2;// b = b+2;
b-=4;//b = b-4;

let c = 3;
console.log(c);//3
console.log(++c)//4//first increment /decrement the value based on the operator


//if
//else
//switch

//if blocks work

//function nameofFn(){

//}



//how does if loop work?
//if a certain condition written inside the parantesis of if block is true then we enter inside the body of if/ basically enters inside the curly 

let g = 3;
if(g>4){
    console.log(g);
}
// else{
//   console.log(enter);
// }
if(g>4){
    console.log(g);
}
else if(g==3){
    console.log("g value is 3")
}
else{
    console.log("Enterd innside the else block");
}

let number = 6;
switch (number){
    case 1:
        console.log("I am one");
        break;
     case 2:
        console.log("I am two");
        break;
    case 3:
        console.log("I am three");
        break; 
    case 4:
        console.log("I am four");
        break; 
    default:
        console.log("I will be greater than four ");
        break;  
}
