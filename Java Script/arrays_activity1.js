// a function that calculates the sum of any array
// taking successive elements of the array sums up and stores in the sum variable
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// example array
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// displaying together with calling the function for array a
console.log(`The sum of array is ${sumArray(a)}.`);
