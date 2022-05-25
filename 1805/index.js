//setTimeout + closure


// const boardingPassengers = (n,wait) => {
//     const peopleperGroup = n/3;

//     setTimeout(() => {
//         console.log(`boarding ${n} number of passengers`);
//         console.log(`boarding ${peopleperGroup} people pre value`);
//         console.log("boarding in secs", wait);
//     }, wait*1000);
// };


// boardingPassengers(180,2);


//Jquery -Js library which provides effective method for doing something in frontend and gives essential features like DOM manipulation, AJAX interaction and so on.....

// $("button").click(function(){
//     // $("p").hide();
//     // $("p").toggle();
//     // $("#learn").toggle();
//      // $("#learn").hide();
//     // $(".touch").toggle();
//     $(".touch").hide();

// })

// $("#hide").click(function(){
//     $("#learn").toggle();
// })

//API - (Application Programming Interface)

//It connects two applications to pass data from one to another..

//AJAX - it helps us to querybthe API's. It allows us to make the server calls and display the data without reloading the pages.
//it allows us to communicate with remote web servers in an asynchronous way with help of AJAX calls, we can request data from web servers dynamically. It helps us to create CRUD applications.

//CRUD- create read update delete.
//AJAX -  Asynchronous JavaScript And XML. 


$("button").click(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/2",
        type: "GET",
        success : function(response){
            console.log(response);
            document.getElementById("learn").innerText = response.title;
            // document.getElementById("learn").innerText = response.userId;
          
        }
    })
})