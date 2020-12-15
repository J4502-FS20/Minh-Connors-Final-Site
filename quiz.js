"use strict";

var radios = document.getElementsByTagName('input');

var correctAnswers = ["1826", "1883", "$20,000", "Obelisk"];
var numberOfCorrectAnswers;

var submitButton = document.getElementById("submit");

var answerElement = document.getElementById("answertotal");

submitButton.addEventListener('click', function(){

  console.clear();

  numberOfCorrectAnswers = 0;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
        if (correctAnswers.indexOf(radios[i].value) > - 1) {
          console.log(radios[i].value + "is correct");
          numberOfCorrectAnswers += 1;
        }
      }
    }
  console.log(this);
  answerElement.innerHTML = "You got <span>" + numberOfCorrectAnswers + "</span> correct";

});


for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', function() {
    console.log(this.parentElement);
    console.log("A radio button has been selected!");
  });
}
