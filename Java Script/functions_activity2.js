// factorial function
// for numbers less than 0, it displays a message and returns UNDEFINED
// for 0 returns 1
// for natural numbers greater than 0, calculate the factorial
const factorial = (number) => {
  if (number < 0) {
    console.log("There is no factorial for negative numbers");
    return "UNDEFINED !!!";
  } else if (number === 0) {
    return 1;
  } else {
    result = 1;
    for (let l = 1; l < number + 1; l++) {
      result *= l;
    }
    return result;
  }
};

// sample number
const num = 6;

// displaying information along with calling the function
console.log(`Factorial ${num}! is ${factorial(num)}.`);
