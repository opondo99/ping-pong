$(document).ready(function(){
    $("form#userInputForm").submit(function(event){
        event.preventDefault()
        var input = parseInt($("input#userInput").val());
        $("div#result").empty();
        for(var number = 1; number <= input; number++){
            if((number %3 === 0) && (number %5 === 0))
                $("#result").append("pingpong<br>");
            else if(number %3 === 0)
                $("#result").append("ping<br>");
            else if(number %5 === 0)
                $("#result").append("pong<br>");
            else
                $("#result").append(number + ",<br>");
            }

       
    })

});



    

    
