$(document).ready(function(){
    $("form#userInput").submit(function(event){
        event.preventDefault()
    })
    var input = parseInt($("input#userInput").val());
    var result = numbers(input)
    $("#result").text(result)
});




var pingPong = function(input){
        if(input % 3 ===0 && input % 5 === 0){
            return PingPong;
        }
    
        else if(input % 3 === 0){
        return Ping
    }
        else if(input % 5 === 0){
        return Pong;
    }
};
