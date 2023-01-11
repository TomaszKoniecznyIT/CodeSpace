function arrayContent(array) {
  console.log(`The content of array is: ${array}`);
}

function maxArray(array) {
  let max = array[0];
  for (i = 0; i < array.length; i++) {
    if (max < array[i]) max = array[i];
  }
  return max;
}

array1 = [10, 2, 3, 4, 7];
arrayContent(array1);
console.log(`The max value in the array is: ${maxArray(array1)}`);
