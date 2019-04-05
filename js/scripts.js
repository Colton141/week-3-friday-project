// business logic //

var beepBoopArray = [];


//this will change numbers 1, 2, and 3 to "Beep!", "Boop!"", and "I'm sorry, Dave. I'm afraid I can't do that".
function numberBreakDown(num) {
  for (i = 0; i < num.lenght; i++) {
    if (num[i] === 1){
      beepBoopArray.push("Beep!");
    } else if (num[i] === 2) {
      beepBoopArray.push("Boop!");
    } else if (num[i] === 3) {
      beepBoopArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      beepBoopArray.push(num[i]);
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
