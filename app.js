let action = document.getElementById("action");
let score = document.getElementById("score");
let option = "start";
let tmp = 0.0;

const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const comma = document.getElementById("comma");

const percent = document.getElementById("percent");
const negation = document.getElementById("negation");
const clear = document.getElementById("clear");
const division = document.getElementById("division");
const multiplication = document.getElementById("multiplication");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const equals = document.getElementById("equals");

zero.addEventListener("click", function(){ score.innerHTML += "0"; });
one.addEventListener("click", function(){ score.innerHTML += "1"; });
two.addEventListener("click", function(){ score.innerHTML += "2"; });
three.addEventListener("click", function(){ score.innerHTML += "3"; });
four.addEventListener("click", function(){ score.innerHTML += "4"; });
five.addEventListener("click", function(){ score.innerHTML += "5"; });
six.addEventListener("click", function(){ score.innerHTML += "6"; });
seven.addEventListener("click", function(){ score.innerHTML += "7"; });
eight.addEventListener("click", function(){ score.innerHTML += "8"; });
nine.addEventListener("click", function(){ score.innerHTML += "9"; });
comma.addEventListener("click", function(){
  if(score.innerHTML != "" && score.innerHTML.indexOf(".") == -1)
    score.innerHTML += ".";
});

function calculate() {
  let number = parseFloat(score.innerHTML);
  switch(option) {
    case 'start':
      tmp = number;
      break;
    case 'equals':
      tmp = number;
      action.innerHTML = "";
      break;
    case 'plus':
      tmp += number;
      break;
    case 'minus':
      tmp -= number;
      break;
    case 'percent':
      tmp %= number;
      break;
    case 'multiplication':
      tmp *= number;
      break;
    case 'division':
      tmp /= number;
      break;
  }
}

percent.addEventListener("click", function(){
  if(score.innerHTML != "") {
  calculate();
  action.innerHTML = tmp+" % ";
  score.innerHTML = "";
  option = "percent";
  }
});

negation.addEventListener("click", function(){
  if(score.innerHTML != "") {
  let number = parseFloat(score.innerHTML);
  if(number > 0)
    score.innerHTML = "-"+score.innerHTML;
  else
    score.innerHTML = Math.abs(number);
  }
});

division.addEventListener("click", function(){
  if(score.innerHTML != "") {
  calculate();
  action.innerHTML = tmp+" / ";
  score.innerHTML = "";
  option = "division";
  }
});

multiplication.addEventListener("click", function(){
  if(score.innerHTML != "") {
  calculate();
  action.innerHTML = tmp+" * ";
  score.innerHTML = "";
  option = "multiplication";
  }
});

minus.addEventListener("click", function(){
  if(score.innerHTML != "") {
  calculate();
  action.innerHTML = tmp+" - ";
  score.innerHTML = "";
  option = "minus";
  }
});

plus.addEventListener("click", function(){
  if(score.innerHTML != "") {
  calculate();
  action.innerHTML = tmp+" + ";
  score.innerHTML = "";
  option = "plus";
  }
});

equals.addEventListener("click", function(){
  if(score.innerHTML != "") {
  calculate();
  action.innerHTML += score.innerHTML+" = "+tmp;
  score.innerHTML = tmp;
  option = "equals";
  }
});

clear.addEventListener("click", function(){ action.innerHTML = "&nbsp;"; score.innerHTML = ""; tmp = 0; });
