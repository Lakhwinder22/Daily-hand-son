// console.log("working...");

// const StudentPrototype ={
//   calcAge() {  
//   console.log(2022 - this.bYear);
//     };
//     initialise(fname, lname, bYear){
//         this.fname = fname;
//         this.lname = lname;
//         this.bYear = bYear;
//     }

// const honey = Object.create(StudentPrototype);
// console.log(honey)
// honey.initialise = ("honey","tambi",1999);
// honey.lname =("honey");
// honey.calcAge();

// const PersonPrototype= Object.create(StudentPrototype);
// console.log(PersonPrototype);

// PersonPrototype.initialise = function(fname,lname,byear,course){
//     StudentPrototype.initialise.call(this,fname,lname,byear);
//     this.course = course;
// }
// PersonPrototype.initialise = function(){
//     console.log(`my name ${this.fname}${this.lname} and my course is ${this.course}`);
// }

// const jay = Object.create(PersonPrototype);
// console.log(jay);
// jay.initialiseOne("Jay","Dubey",1986,"CSE");
// console.log(jay);
// jay.calcAge();
// jay.introduce();

// console.log(jay.__proto__);
// console.log(jay.__proto__.__proto__);
// console.log(jay.__proto__.__proto__jay.__proto__);
// console.log(jay.__proto__.__proto__jay.__proto__.__proto__);

//  Clasures = clasures is not something that we create manually or explicitly. 
// It happens automatically in certain situations which we need to recognize.
// Clasures makes a function all the variables that existed at the function birthplace initialy.
// Any function always has access to the variable environment of the exection context in which the function was created.

const ticketBooking = function(){
    let passenger = 0;

    return function(){
        passengerCount++;
        console.log('the passenger Count is ${passengerCount}');
    };
};

const bookie = ticketBooking();
bookie();
bookie();
bookie();

