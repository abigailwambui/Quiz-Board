// This is the business logic
$(document).ready(function () {
    $("form#QUESTIONS").submit(function (event) {

  var question1= $("input:radio[name=question1]:checked").val();
  var question2= $("input:radio[name=question2]:checked").val();
  var question3= $("input:radio[name=question3]:checked").val();
  var question4= $("input:radio[name=question4]:checked").val();
  var question5= $("input:radio[name=question5]:checked").val();
  var question6= $("input:radio[name=question6]:checked").val();
  var question7= $("input:radio[name=question7]:checked").val();
  var question8= $("input:radio[name=question8]:checked").val();
  var correct = 0;


      if (question1 == "Javascript") {
        correct ++;
      }
      if (question2 == ".toLowerCase") {
        correct ++;
      }

      if (question3 == "Console") {
        correct ++;
      }
      if (question4 == "Enables a more interactive session between the user and the website") {
        correct ++;
      }
      if (question5 == "SCRIPT") {
        correct ++;
      }
      if (question6 == "document.write") {
        correct ++;
      }
      if (question7== "if") {
        correct ++;
      }
      if (question8 == ".splice()") {
        correct ++;
      }
      var percent = correct/8*100
       if (percent >69){
         remark="EXELLENT!"
       }
       if(percent >49){
         remark="FAIR!"

       }
       else {
         remark="Reread your course work?!!"
       };

        document.getElementById("correct").innerHTML = "You scored " + correct +" out of 8 questions correct."
        document .getElementById("results").innerHTML = remark;

        event.preventDefault();


    });

});
