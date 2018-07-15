$(document).ready(function(){
    $("form#userInput").submit(function(event){
        event.preventDefault()
    })
    var input = parseInt($("input#userInput").val());
    $("#result").text(input)
});


for(var input = 0; input <= 100; input++){
    if((input%3 === 0) && (input%5 === 0))
        console.log("pingpong");
    else if(input%3 === 0)
        console.log("ping");
    else if(input%5 === 0)
        console.log("pong");
    else
        console.log(input);
}
    


