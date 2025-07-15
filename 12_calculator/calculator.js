const add = function(a,b) {
  return (a + b);
};

const subtract = function(a,b) {
  return (a - b);
	
};

const sum = function(...args) {
	let total = 0;
  for (let i of args) {
    total += i;
  }
  return total;
};

const multiply = function(a, b) {
  return (a * b);

};

const power = function(base, exponent) {
  return base ** exponent;
	
};

const factorial = function(n) {
	if ( n === 0) return 1;
  return n * factorial(n-1);
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
