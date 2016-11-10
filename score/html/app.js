

var counterL = 0;
var counterR = 0;

$(document).ready(function() {

    $("#left").click(function(){
        counterL++;

        $("#left-score").text(counterL);
    });

    $("#right").click(function(){
        counterR++;
        $("#right-score").text(counterR);
    });

    $("#clear").click(function(){
      counterL = 0;
      $("#left-score").text(counterL);
      counterR = 0;
      $("#right-score").text(counterR);
    });

});
