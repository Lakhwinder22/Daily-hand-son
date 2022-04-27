// not defined, undefined, null
//not defined - Any variable which we try to access but not declared will throw us a reference Error: variable not defined
// console.log(myAge);//not defined

// undefined - If a variable is declared but not assigned any value yet, but if we try to access that variable then we will get the errror as undefined.
let myHobbies;
console.log(myHobbies);
myHobbies = "Skating";
console.log(myHobbies);

// null - Its a default value assigned by a user to the variable as long as th variable  has not been assigned its original /updated value

let amIadult = null;
console.log(amIadult)//null
amIadult = true;
console.log(amIadult)//true
Global Scope and local/ block Scope 
// The variable outside the block is called Global Variable.
let fname = "Hari";
const Iname = "Bajaj";
var age = 29;
console.log(fname,Iname,age);
{
    let fname = Hari 
    const Iname = Bajaj
    var age = 29
    console.log(fname,Iname,age);
    
}
In the Global scope generally we are not able to access block scope variables as long as there let/const keywords, So it will give us an referenceError: variable not defined.
but for var we can access then even on global scope space.