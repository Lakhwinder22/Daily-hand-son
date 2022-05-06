console.log("Working");

// ojects = Objects are collection of Properties and method
// object have keys which are 
let mobile = {
    Brand : "Samsung",
    weight : 200,
    isWorking : true,
    11 : "Android Version",
    displayInfo : function(){
        console.log('The brand of my mobile is ${mobile.brand} and the weight is ${mobile.weight} which is the working condition ${mobile.isWorking}, also with a android version of ${mobile["11"]} ');
    }
}

console.log(mobile);

mobile.camera = "32px";

console.log(mobile);
console.log(mobile.displayInfo());

let mobile1 = {}; //empty object currently

// we will start assising properties to the object using objectName, properties.

mobile1.brand = "OnePlus";
mobile1.weight = 19;
mobile1.isWorking = false;

function Mobile(brand,weight,camera){
    this.brand = brand;
    this.weight = weight;
    this.camera= camera;

}


let apple = new Mobile("Apple",190,"13px");
let vivo = new Mobile("vivo",210,108px);
console.log(apple);
console.log(vivo);

 console.log(apple.brand);


console.log(Object.keys(apple));
console.log(Object.values(apple));

for(const[key,value] of Object.entries(apple)){
    console.log(key,value);
}

// this.keyword

// in an Object this refers to the Object
// when we use this keyword  alone, then it points to global object
// In a Function, this refers to parent Onject,


value = 23; // always give a keyword like let, const, var otherwise you are creating a property to the window object
console.log(value);
console.log(this)

// -----------------------------------
// spread operators....
let arr1 = [1,2,3,4,5];a
let arr2 = [7,8,9,10,11];

console.log(arr1.concat(arr2));
let arr3 = [...arr1,...arr2];
console.log(arr3);
 