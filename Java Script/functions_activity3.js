function greaterThan1(number) {
  if (number > 1) {
    return true;
  } else return false;
}

const primeNumbers = (number) => {
  if (number === 2) {
    return true;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
};

const b = 63;
if (greaterThan1(b)) {
  if (primeNumbers(b)) {
    console.log(`The number ${b} is a prime number.`);
  } else {
    console.log(`The number ${b} is not a prime number.`);
  }
} else {
  console.log("Only numbers greater than 1 may or may not be prime.");
}
