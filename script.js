var outputText;
var complimentInput;
var complimentButton;

var complimentPhrase =["you're beautiful, inside and out","that outfit is giving", "you're the smartest person I know","you're extremely talented","oh how wise you are", "your kindess is your greatest strength", "you give good vibes","you're so refined"];

document.addEventListener("DOMContentLoaded",function(){
  outputText = document.getElementById('output-text');
  complimentInput = document.getElementById("compliment-input");
  complimentButton = document.getElementById("compliment-button");

  complimentButton.addEventListener("click",function(){
    var complimentOutput = complimentInput.value;
    compliment(complimentOutput);
  });

});

 function compliment(incomingName){
   var random = [Math.floor(Math.random()*complimentPhrase.length)];
   outputText.innerText = incomingName + ', ' + complimentPhrase[random] + "!";
   restyle();
 }

 function restyle() {
   var randomRed = Math.floor(Math.random()*290);
   var randomGreen = Math.floor(Math.random()*90);
   var randomBlue= Math.floor(Math.random()*170);
   var randomRotation = -5 + (Math.random()*10)
   var randomFontSize = 20 + (Math.random()*50);
   var outputColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
   outputText.style.fontSize= randomFontSize + "px";
   outputText.style.color= outputColor;
   outputText.style.transform = "rotate(" + randomRotation + "deg)";
 }
