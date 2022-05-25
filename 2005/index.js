// console.log(Work);

// API = (Application Programing Interface)

// It connects two application to pass data from one to another...

// AJAX = It helps us to query the API's. It allows us to make the server calls and 
// display the data without reloading the pages.

// It allows us to communicate with remote web seervers in an asynchronous way with help of AJAX calls, 
// we can request data from  web servers dynamically. It helps us to create CRUD Applications.

$("button").click(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        type: "GET",
        success: function(response){
            console.log(response);
            document.getElementById("learn").innerText=response.title;        }
    })
})


// -----------------------------------------------------------------

// Callback Hell -  They are just a name or convention for using JavaScript functions. It instead of returning results immediately like other functions, 
// takes time to produce the result. These are more of like an I/O operations.

// CallbackHells are in a form of arrow shaped, pyramid shaped



// const getEmployeeID = () => {
//     setTimeout(() => {
//         console.log("Fetching the Employee details");
//         let id = [1,2,3,4,5];
//         console.log(id);

//         setTimeout(() => {
//             let employeeDetails = {
//                 name: "Arjun Kanungo",
//                 age: 34,
//             }
//             console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);
            
//             setTimeout(() => {
//                 employeeDetails.gender = "Male",
//                 console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender}`);
               
//                 setTimeout(() => {
//                     employeeDetails.salary = 21000;
//                     console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender} and the salary is ${employeeDetails.salary}`);
//                 },2000);
//             }, 2000); 
//         }, 2000)
//     },2000);
// }

// getEmployeeID();


//  Promises - Promises are used to handle to asynchronous opertaions in JavaScript. They are easy to manage when
// dealing with multiple asynchronous operations where multiple callbacks can create callback hells leading to 
// unmanageable code.
// This doesn't means that Promises are only used for avoiding callback hells, instead are often used for 
// handling asynchronous operations.

// Promises takes two executor functions as parameters, namely resolve and reject. If the 
// data is fetched correctly then the control is passed to resolve method which in turn calls the . then() method, if the data 
// isn't fetched for some reasons i.e. there is an error, then the reject method is called which further calls 
// the .catch() method.


// There are three stages in Promises
// 1. Pending - When the promise is still executing i.e not yet resolved or rejected then they are called to 
// be in Pending stage/.
// 2. Resolved/fulfilled - when the promise is resovled or have fetched the data correctly,it ends up being
// into resolved state.
// 3. Rejected - when the promise fails in fetching the result, it ends up being into rejected state.

// promise  creation
const getEmployeeID = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let id = [1,2,3,4,5];
        resolve(id);
        reject("The dat isn't found");
    }, 2000);
})
const getElementByDetails = (data) =>{
return new Promise((resolve,reject)=>{
    setTimeout((data)=>{
        let employeeDetails ={
            name: "Arjun Kanungo",
            age: 34,
        }
        console.log("I am printing inside the promise", data);
        resolve('The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}');

    }, 3000, data);
})
}
// promise consuming - used for consumption
getEmployeeID
    .then((id)=>{
    console.log(id);
    getElementByDetails("Hii").then((data)=>{
    console.log("I am inside the then method", data);
    })
})
.catch((err)=>{
     console.log("Error Message", err);
})
     .finally(()=> {
         console.log("End of Program");
     })


let promise = new Promise((resolve, reject)=>{
        resolve();
}) 
    
    promise.then(()=>{
        setTimeout(() => {
            console.log("first Call");
        }, 1000);
}).then(()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                console.log("second Call");
                resolve();
            }, 3000);
});  
}).then(()=>{
        setTimeout(() => {
            console.log("third Call");
        }, 2000);
})
    
