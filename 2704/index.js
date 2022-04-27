console.log("Working");


// Loops- for, While, do while, for while, for each, for-in, for-of


for(let i = 10 ; i < 20 ; i++){
    console.log(i);
}

let a =10; 
while(a > 0){
    console.log(a);
    a--;
}

for(let j=2; j<=20; j=j+2){
    console.log(j);
}

let k=2;
while(k<=20){
    console.log(k);
     k=k+2;
}
// using for loop and while loop try to print the mutiple of 2 till 20 from 2.

let c=2;
do{
    console.lo(c);
    c=c+2;
}while(c <=20);

// for -in loop = used to fetch the indexes of the Array

let name = "Ribbu";
// if our values are n  then our indexes are n-1
let tourists = ["Ram", "lakhi", "Ravi", "Sid"];

for (let a in tourists){
    console.log(a);
}

//  for - of loop = used to fetch the values of the AARAY.

for(let values of tourists){
    console.log(values);

}

// forEach Loop

tourists.forEach((values,index)=>{
    console.log(values,index)

})
 

// tourists.forEach((index, values)=>{  /// the first parameter accepts the values of the AARRAY and the second parameter accepts the indexes of the array

// })