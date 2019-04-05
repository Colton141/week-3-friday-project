// business logic //

var beepBoopArray = [];


//this will change numbers 1, 2, and 3 to "Beep!", "Boop!"", and "I'm sorry, Dave. I'm afraid I can't do that".
var numbersBreakDown = function(num) {
  for (i = num; i < num.lenght; i++) {
    if (i === 1){
      beepBoopArray.push("Beep!");
    } else if (i === 2) {
      beepBoopArray.push("Boop!");
    } else if (i === 3) {
      beepBoopArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      beepBoopArray.push(i);
    }

  }
}










// front-end (interface) logic
$(document).ready(function(){
  $("form#beep-boop").submit(function(event){
    event.preventDefault();
    var num = $("input#userNumber").val();
  })

})
