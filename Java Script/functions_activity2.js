const factorial = (number) => {
  if (number < 0) {
    console.log("There is no factorial for negative numbers");
    return "undefined !!!";
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

const num = -1;
console.log(`Factorial ${num}! is ${factorial(num)}.`);
