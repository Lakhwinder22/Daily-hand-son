// ------------------------------------- Inheritance --------------------------------------------------


let student1 = {
    fname: "Kshitij",
    lname: "Sharma",
    age: 20,
}
let student2 = {
    fname: "Aman"
}

student2.__proto__ = student1;

console.log(student2);
console.log(student2.lname);

//---------------------------------------------------------creating objects
const Employee1 = {
    Name: "Mr.Abhiram",
    Designation: "Manager",
    Id: "MI00085",
    showDetails: function(param){
        console.log(this.Name,this.Id,this.Designation)
    }
}
const Employee2 ={
    Name: "Mr.Chetan",
    Designation: "Assistant",
    Id: "AI00087"
}
const Employee3 = {
    Name: "Mr.Vishal",
    Designation: "Personal Assistant",
    Id: "PI00090",
}

// Employee1.__proto__ = Employee2,Employee3;

// console.log(Employee1);
// console.log(Employee2);
// console.log(Employee3);
employee1.showDetails.call(employee2);//passing the 
function add(){
    console.log("I am an addition fn");
}

let arr = [1,2,3,4,5];
let arr1 = [1,2,3,4,5];
let arr2 = [1,2,3,4,5];

let student3 = {
    fname: "Sidhant",
    lname: "Gupta",
    age : 23,
}

let student4 = {
    fname : "Raju",
}

student4.__proto__ = student1;
console.log(student4);

console.log(arr1.__proto__);
console.log(arr1.__proto__.__proto__);
console.log(arr1.__proto__.__proto__.__proto__);

