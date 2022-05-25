$("#Hide").click(function(){
  $("#para").hide();
})

$("#toggle").click(function(){
    $("#para1").toggle();
})


$("button").click(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/12",
        type: "GET",
        success : function(response){
            console.log(response);
            document.getElementById("learn").innerText = response.title;
           
          
        }
    })
})