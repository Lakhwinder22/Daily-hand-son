console.log("Working");
// Example
const arr =[1,2,3,4,5,6];
console.log(arr[1]);

const element=document.getElementById("message");
console.log(element);
console.log(element.innerHTML);
console.log(element.innerText);


const element2 = document.getElementsByClassName("impMessage");
console.log(element2);
console.log(element2[0].innerHTML);
console.log(element2[0].innerText);
console.log(element2[1].innerHTML);
console.log(element2[1].innerText);


function changeText() {
    const changeText = document.getElementsByTagName("h1");
    changeText[0].innerText = "Hello World!!"
    console.log(changeText[0].innerText);
}

function changeColor() {
    const changeColor = document.getElementsByClassName("impMessage");
    const changeColor1 = document.getElementById("message");
    changeColor[0].style.color = "red";
    changeColor1.style.color = "orange"; 
}


