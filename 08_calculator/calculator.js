const add = function(number1, number2) {

  return Number(number1 + number2);
	
};

const subtract = function(number1, number2) {
	
  return Number(number1 - number2);

};

const sum = function(array) {
	
  let totalSum = 0;

  for(let i = 0; i < array.length; i++){

    totalSum += array[i];

  }

  return totalSum;

};

const multiply = function(array) {

  let multiplicationResult = 1;

  for(let i = 0; i < array.length; i++){

    multiplicationResult *= array[i];

  }

  return multiplicationResult;

};

const power = function(number1, number2) {

  return Number(number1 ** number2);
	
};

const factorial = function(number) {

  let multiplicationResult = 1;

  for(let i = 1; i <= number; i++){

    multiplicationResult *= i;

  }

  return multiplicationResult;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
