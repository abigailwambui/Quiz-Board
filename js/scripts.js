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
        correct +=10;
      }
      if ("#question2" == ".toLowerCase()") {
        correct +=10;
      }
      if ("#question3" == "Cosnsole") {
        correct +=10;
      }
      if ("#question4" == "Enables a more interactive session between the user and the website") {
        correct +=10;
      }
      if ("#question5" == "SCRIPT") {
        correct +=10;
      }
      if ("#question6" == "document.write("Hello world")") {
        correct +=10;
      }
      if ("#question7" == "if") {
        correct +=10;
      }
      if ("#question8" == ".splice()") {
        correct +=10;
      }


var messages = ["GREAT SCORE!", "AVERAGE SCORE!", "POOR SCORE!"]
var pictures = ["https://i.pinimg.com/originals/e5/f2/30/e5f23048100b59448cd1ba586368f83b.gif", "https://previews.123rf.com/images/enciktep/enciktep1601/enciktep160100121/52131891-mark-average-on-performance-evaluation.jpg", ]

var range;

      if (correct < 49) {
        range = 2;
      }
      if (correct > 49 && correct < 60) {
         range = 1;
      }
      if (correct > 70) {
         range = 0;
      }

      document.getElementById("after-submit").style.visibility = "visible";

      document.getElementById("message").innerHTML = messages [range];
      document.getElementById("number-correct").innerHTML= "You got "+ correct+ "correct";
      document.getElementById("picture").src = pictures[range];.

}
