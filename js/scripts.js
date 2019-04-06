// business logic //

var beepBoopArray = [];
var beepBoopString = beepBoopArray.join("");

//this will change numbers 1, 2, and 3 to "Beep!", "Boop!"", and "I'm sorry, Dave. I'm afraid I can't do that".
// function numberBreakDown(num) {
//   for (i = 0; i < num.lenght; i++) {
//     if (num[i] === 1){
//       beepBoopArray.push("Beep!");
//     } else if (num[i] === 2) {
//       beepBoopArray.push("Boop!");
//     } else if (num[i] === 3) {
//       beepBoopArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
//     } else {
//       beepBoopArray.push(num[i]);
//     }
//
//   }
// }


//this will change numbers 1, 2, and 3 to "Beep!", "Boop!"", and "I'm sorry, Dave. I'm afraid I can't do that".
function numberBreakDown(num){
  for (var i = num; i !=0; i+= 0){
    var numArray = (''+num).split("");
    for (j = 0; j < numArray.length; j+= 1){
      if ("3".includes(numArray[j])) {
        beepBoopArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
        var t = (i - 1);
        var num = t;
      } else if ("2".includes(numArray[j])){
        beepBoopArray.push("Boop!");
        var t = (i - 1);
        var num = t;
      } else if ("1".includes(numArray[j])){
        beepBoopArray.push("Beep!");
        var t = (i - 1);
        var num = t;
      } else {
        var numPush = numArray.join('');
        beepBoopArray.push(numPush);
        var t = (i - 1);
        var num = t;
      }
    }
  }
}

// beepBoopArray.push("0");

var n = 12345678910 ;
var digits = (''+n).split('');
console.log(digits);



// front-end (interface) logic
$(document).ready(function(){
  $("form#beep-boop").submit(function(event){
    event.preventDefault();
    var num = $("input#userNumber").val();
    numberBreakDown(num);
    console.log(beepBoopArray);
    console.log(beepBoopString);
  })

})
