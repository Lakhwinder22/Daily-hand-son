console.log("Working");

// continue......... Array 
// map, filter, reduce
// they are known as one liner functions.
// map, filter, reduce never modifies the original array.
// map, filter, reduce returns/creates a new array.

// let numbers = [2,3,4,5,6,7];

// console.log(numbers);
// numbers.map((item)=> {console.log(item)})

// let res = numbers.filter((item)=> {
//     return item > 3
// })
// console.log(res);

// let res1 = numbers.reduce((acc,cur) => acc = acc+cur,0);

// console.log(res1);


let numbers = [2,3,4,5,6,7];

let res1 = numbers.reduce((acc,cur) => acc = acc*cur,1);
                                                                
console.log(res1);


// --------------------------------------------------------------

// String =

// Method of String
// 1 = chartAt,
// length = 16(suppose)
// index value is from 0 to 15 [0 to length-1]

let str = "Lakhwinder Singh";
// console.log(str.length);
console.log(str.charAt(2));

// 2 = endWith

console.log(str.endsWith("h"));

// 3 = includes 

let sentence = "Hello World";
console.log(sentence.includes("World"));

// 4 = indexOf

console.log(sentence.indexOf("o"));

// 5 = lastIndexOf
console.log(sentence.lastIndexOf("o"));


// 6 = length 

console.log(str.length);

// 7 = replace 
// Not going to moniputate the original string 
console.log(str.replace("Lakhwinder", "Lucky"));

//  8 = search 
console.log(str.search("Singh"));

// substr

console.log(sentence.substr(0,4)); // first value is the index position and second value is the no of characters from the index position mentioned  in the first .

// substring

console.log(sentence.substring(0,7)); // first index value is inclusive, last  index value is exclusive.

// for substring always the lower value is the starting index and higher value is the ending index, irrespective of the position of the values mentioned.
console.log(sentence.substring(7,0));

let email = "sidhantgupta@prepbytes.com";

let values = email.split("@");
console.log(values);
