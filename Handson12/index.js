
   function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

let count = 0;
(function immediate(){
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? // 1
  }
  console.log(count); // What is logged? //0
})();

for (var i = 0; i < 3; i++){
  setTimeout(function log(){
  console.log(i); // What is logged? // (3)3
  }, 1000);
}
// Write a code to calculate area of a rectangle using inner function. 
// In this case outer function should accept parameter length and inner function should accept parameter breadth.