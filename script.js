var outputText;
var complimentInput;
var restyleButton;
var halfButton;
var complimentButton;
var halfInput;
var complimentOutput;

var complimentPhrase =["you're beautiful, inside and out","trust yourself, you know what you're doing", "you're the smartest person I know","you're extremely talented","oh how wise you are", "your kindess is your greatest strength"

document.addEventListener("DOMContentLoaded",function(){
  outputText = document.getElementById('outputText');
  restyleButton = document.getElementById("restyle-button");
  complimentInput = document.getElementById("compliment-input");
  halfButton = document.getElementById("half-button");
  complimentButton = document.getElementById("compliment-button");
  halfInput = document.getElementById("half-input");
  complimentOutput = document.getElementById("compliment-output");


halfButton.addEventListener("click",function(){
  var halfOutput = halfInput.value;
    halfNumber(halfOutput);
});

complimentButton.addEventListener("click",function(){
  var complimentOutput = complimentInput.value;
  compliment(complimentOutput);
});

});

  function halfNumber(num){
    var halfNum = num / 2;
    alert(halfNum);
    console.log("Half of " + num.toString() + " is " + halfNum.toString());
  }


   function compliment(){
     var complimentPhrase =["you're beautiful, inside and out","trust yourself, you know what you're doing", "you're the smartest person I know","you're extremely talented","oh how wise you are", "your kindess is your greatest strength"
     random = [Math.floor(Math.random()*complimentPhrase.length)];
     var output = document.getElementById('outputText');
     var currentInputText=complimentInput.value;
     output.style.fontSize="45px";
     output.style.color= "#810EF5";
     output.innerHTML= currentInputText + ',' + complimentPhrase[random];
}
