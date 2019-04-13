// business logic //



//this will change numbers 1, 2, and 3 to "Beep!", "Boop!"", and "I'm sorry, Dave. I'm afraid I can't do that".
// function numberBreakDown(num){
//   var beepBoopArray = [];
//   for (var i = num; i != -1; i--){
//     var numArray = (''+num).split("");
//       if (numArray.includes("3")) {
//         beepBoopArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
//       } else  if (numArray.includes("2")) {
//         beepBoopArray.push("Boop!");
//       } else if (numArray.includes("1")) {
//         beepBoopArray.push("Beep!");
//       } else {
//         beepBoopArray.push(num);
//       }
//
//     }
//   }

function numberBreakDown(num){
  var beepBoopArray = [];
  for (var i = num; i >= 0; i--){
      if (i.toString().includes(3)) {
        beepBoopArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
      } else  if (i.toString().includes(2)) {
        beepBoopArray.push("Boop!");
      } else if (i.toString().includes(1)) {
        beepBoopArray.push("Beep!");
      } else {
        beepBoopArray.push(i);
      }
    }
    return beepBoopArray;
  }







// front-end (interface) logic
$(document).ready(function(){
  $("form#beep-boop").submit(function(event){
    event.preventDefault();
    var num = $("input#userNumber").val();
    numberBreakDown(num);
    var beepBoopString = numberBreakDown(num).reverse();
    $(".result").text(beepBoopString);
  });
});
