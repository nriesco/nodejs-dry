
/*
* contains the methods implemented in math
* method's names are the same on purpose
*/

/*
* increments a number by 100
*/
exports.increment = function(number) {
  return number + 100;
}

/*
* adds two numbers, but the second is first multiplied by 100
*/
exports.add = function(number1, number2) {
  return number1 + number2 * 100;
}
