console.log("Working");


// Method 1=  Creating and Assiging Values to an Array.
let names = ["Aman", "Lakhu", "Ram", "Sid"];
console.log(names);

// Method 2 = Create an empty, and then start assigning values to them as per the index positions.

let name2 = [];

name2[0] = 'Raju';
name2[1] = "Ramesh";
name2[2] = "Rajesh";
name2[3] = "Raman";
name2[6] = "Ritu";

console.log(name2);

// method 3 = Create an array using  Array Constructor

let name3 = new Array("Raju", "Rama");
console.log(name3);

// Push , Pop, Shift, Unshift, Length, IndexOf, LastIndexOf

// Push = adds value at the last position only.

names.push("Shyam");
names.push(7);
console.log(names);

// pop helps us to remove the value from the last position.

names.pop();
names.pop();
console.log(names);

// Shift remove from the first position and unshift adds on the first postion

names.shift();

names.unshift("Kuldeep");
console.log(names);

// Length is a property 

console.log(names.length);

// indexOf, LastIndexOf, Join, Conact, Reverse, Sort, Slice , Splice,

let num1 = [1,2,3,4,4,5,5];
let num2 = [6,7,8,9,10];

// console.log(num1.indexOf(3));
// console.log(num1.lastindexOf(5));


// Concat donot changes the original Array.
num1.concat(num2);
console.log(num1);
console.log(num2);
console.log(num1.concat(num2)); //
console.log(num1.join("*")); //

// Reverse 

console.log(num1.reverse());

let num3 = [5,2,6,3,8,1,4];
console.log(name3.sort());

// console.log(names.sort());

// using sort followed by reverse gives you values arranged in descending Order.
// sort modifies the original array.

console.log(names.sort().reverse());

// Splice, Slice 

// Splice = first value gives the index and secong value gives the number of values to be removed.
//  num3.splice(2,2,3,5,6,8);
//  console.log(num3);



// slice = starting index is inclusive and end index is exclusive i.e not included.
num3.slice(2,6);
console.log(num3.slice(2,6));

