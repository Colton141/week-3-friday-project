










// front-end (interface) logic
$(document).ready(function(){
  $("form#beep-boop").submit(function(event){
    event.preventDefault();
    var num = $("input#userNumber").val();
  })

})
