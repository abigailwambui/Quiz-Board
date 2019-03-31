function check(){
  var question1= document.(".quiz").("#question1").value;
  var question2= document.(".quiz").("#question2").value;
  var question3= document.(".quiz").("#question3").value;
  var question4= document.(".quiz").("#question4").value;
  var question5= document.(".quiz").("#question5").value;
  var question6= document.(".quiz").("#question6").value;
  var question7= document.(".quiz").("#question7").value;
  var question8= document.(".quiz").("#question8").value;
  var correct = 0;

      if ("#question1" == "Javascript") {
        correct ++;
      }
      if ("#question2" == ".toLowerCase()") {
        correct ++;
      }
      if ("#question3" == "Cosnsole") {
        correct ++;
      }
      if ("#question4" == "Enables a more interactive session between the user and the website") {
        correct ++;
      }
      if ("#question5" == "SCRIPT") {
        correct ++;
      }
      if ("#question6" == "document.write("Hello world")") {
        correct ++;
      }
      if ("#question7" == "if") {
        correct ++;
      }
      if ("#question8" == ".splice()") {
        correct ++;
      }
  document.getElementById("after-submit").style.visibility = "visible";
  document.getElementById("number-correct").innerHTML= "You got "+ correct+ "correct";
  }
