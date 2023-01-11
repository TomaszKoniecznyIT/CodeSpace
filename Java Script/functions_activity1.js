// a function that displays the content of the array
function arrayContent(array) {
  console.log(`The content of array is: [${array}]`);
}

// function that finds the maximum value of an array
function maxArray(array) {
  let max = array[0];
  for (i = 0; i < array.length; i++) {
    if (max < array[i]) max = array[i];
  }
  return max;
}

// sample array
array1 = [10, 2, 3, 4, 7];

// calling the function displaying the contents of the array
arrayContent(array1);

// displaying information along with calling the function that finds the maximum value of the array
console.log(`The max value in the array is: ${maxArray(array1)}`);
