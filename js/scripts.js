var saySomething = function(something) {
  alert(something);
};

var bmi = function(weight, hight) {
  return weight / (hight * hight);
};

var weight = parseFloat(prompt("Input your weight"));
var hight = parseFloat(prompt("input your hight"));
var result = bmi(weight,hight);
var outcome = "Your BMI is " + result;
saySomething(outcome);
