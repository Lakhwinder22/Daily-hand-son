console.log("working");
// Maps and Objects,

// let name = [1,2,3,4,5,6,7]

// map preserves the order of insertion of key value pairs
// map also preserves the data type of keys i.e it doesnot  converts the keys to string by default like what object does so, Maps can store keys of any data types.

// how to create a map 
let map = new Map();

// how do we set values to map 

map.set("name","Ravi")
map.set("age",29)
map.set(1,"one")
map.set("Phone", 9844145636)
map.set(true,"true")

console.log(map.get("1"));
console.log(map.get(1));
console.log(map.get("name"));

console.log(map.has("EMAIL"));




console.log(map);
console.log(map.size);
