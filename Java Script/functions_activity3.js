// function to check if a number is greater than 1;
function greaterThan1(number) {
  if (number > 1) {
    return true;
  } else return false;
}

// function checks if a number is prime
const primeNumbers = (number) => {
  //   if it is the number 2 it returns true
  if (number === 2) {
    return true;
  } else {
    // if it is greater than 2 then divide that number by all numbers between 2 and that number (excluding it)
    for (let i = 2; i < number; i++) {
      //   returns false if the number is evenly divisible
      if (number % i === 0) {
        return false;
      }
    }
    // if it didn't return false then return true
    return true;
  }
};

// sample number
const b = 63;
// if the greaterThan1 function is true, run the primeNumbers function and displays the appropriate information
if (greaterThan1(b)) {
  if (primeNumbers(b)) {
    console.log(`The number ${b} is a prime number.`);
  } else {
    console.log(`The number ${b} is not a prime number.`);
  }
} else {
  console.log("Only numbers greater than 1 may or may not be prime.");
}
