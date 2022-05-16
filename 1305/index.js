console.log("Work");

let element = document.createElement("div");
element.className = ("box1");

document.getElementsByTagName("img")




// Function

function a(){
    console.log("I am Fine");

}

// function supports hoisting 
// function body is called function statement/definition.
// function statement support hoisting, i.e calling the function even before declaring the function.

var b = function(){
    console.log("I am fn B");
}
// since here this fn is anonymous, it won't support hoisting, function expressions don't support hositing.
console.log(b);
b();

// A function expression is a unnamed fn assigned to the variable, The variable receives the function defn. which in turn can call the function by calling the variable name. {a();}

{
    const d = function(){
        console.log("This is fn abc");
    }
    d(); //gives the output. 
}

// d(); // will throw not defined error as not in the scope
// the fn can only be called inside the scope and not outside the scope.





// First class Functions - The function can be passed as values into another functions or can be returned from another function as values. This unique feature of function makes then call as first class functions/ First class citizens.

// Higher Order functions(HOF) = The functions which accept the FCF's or return them are called as Higher Order Functions

let g = function(param){
    console.log("I am fn G");
    console.log(param);
    param(); // call back function 
}

function h(){
    console.log("I am Fn h");

}
g(h); // h is a function passed as an argument


// // let param = Function(){
//     console.log("I am Fn H");
// }

let i = function(){
    return function j(){
        console.log("I am Fn J");
    }
}
let returnval = i();
console.log(returnval);
// console.log(i());

setTimeout(()=>){
    console.log("Hii I am inside a callback function");
},4000); 


//First Class Functions(FCF) - The functions can be passed as values(as arguments) into another functions or can be returned from another functions as values. This unique feature of functions makes them call as first classs functions/ First class citizens.


//Higher Order functions(HOF) - The functions which accept the FCF's or return them are called as Higher Order Functions

// let g = function(param){//HOF
//     console.log("I am fn G"); 
//     console.log(param); 
//     param();//callback function   
// }

// // function h(){//FCF
// //     console.log("I am fn h");
// // }

// // g(h);//h is a function passed as an argument


// // let param = function(){
// //     console.log("i am fn H");
// // }

// let i = function(){//HOF
//     return function j(){//FCF
//         console.log("I am fn 
const sayHi = (nameOfFriend) => {//Callback function
    console.log("Hello",nameOfFriend);
}

const greeting = (friend, callBackFUnction) => {
    callBackFUnction(friend);//sayHi(friend);
}

greeting("Bala",sayHi);

//function sayHi(arg3){//arg3=Bala
    // log("hello",arg3)//hello Bala
// }

//function greeting(arg1, arg2){//HOF
    // arg1 = "Bala",
    // arg2 = sayHi,
    // arg2(Bala); => sayHi(Bala);//calling a function
// }

// greeting("Bala",sayHi)
