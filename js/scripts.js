// Business logic

var add = function(number1, number2, number3) {
	return number1 + number2 + number3;
};

// Interface logic

$(document).ready(function() {

  $("form#quiz").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("input:radio[name=answer1]:checked").val());
    var number2 = parseInt($("input:radio[name=answer2]:checked").val());
    var number3 = parseInt($("input:radio[name=answer3]:checked").val());
    var result = add(number1, number2, number3);
    if (result >= 3 && result <= 7) {
      alert("You are Leah");
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2)
    }
  });
});
