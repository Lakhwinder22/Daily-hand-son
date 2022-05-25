const studentPrototype ={
    calcAge(){
        console.log(2022 - this.bYear);
    },
    initialise(fname,lname,bYear){
        this.fname=fname;
        this.lname=lname;
        this.bYear=bYear;
    }
}

const ramesh = Object.create(studentPrototype);

ramesh.Fname = "Ramesh";
ramesh.lname = "Thakur";
ramesh.bYear = 1990;

ramesh.calcAge();

console.log(ramesh);

const kirsten = Object.create(studentPrototype);
console.log(kirsten);

kirsten.initialise("Kirsten", "Stewart", 1986);
kirsten.calcAge();

console.log(kirsten);

classes=
// classes in js doesnot work exactly the same way as that of class in Java/C++
// They are just a syntactic sugar to Object prototypes, instances that we have Read .
// They are special kind of Function with some variation.

// 1. classe are also First class Functions
// 2. classes are not hoisted / donot support hoisting.


const classPrototype = class{
    constructor(fname,lname,bYear){
        this.fname=fname;
        this.lname=lname;
        this.bYear=bYear;
    }
    calcAge(){
        console.log(2022 - this.bYear);
    }
}

const jarvis = new classPrototype("Jarvis", "Valley", 1992);
console.log(jarvis);
jarvis.calcAge();

console.log(jarvis.__proto__);

classPrototype.prototype.greet = function(){
    console.log("Hii I am Someone");

}
jarvis.greet();
console.log(jarvis.__proto__);

console.log("22" + 22);
console.log("Hi" + 22);

console.log(2022 - "1980");
console.log(2022 / "2");
console.log(2022 * "2");
console.log(2022 % "2");

console.log(2 ^ "2");//power is nottypecasting a string to a number like that of a subtraction, division, multiplication,
// modulus
