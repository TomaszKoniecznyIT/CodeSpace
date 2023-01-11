// function that counts the min and max of the array
// set the first element of the array to the max and min elements
// we check if the next element of the array is less than min or greater than max
// if it is then replace max or min with this value
function minMaxArray(array){
    let min = array[0];
    let max = array[0];
    for (let i = 0; i < array.length; i++){
        if (min > array[i]) min = array[i];
        if (max < array[i]) max = array[i];
    };
    console.log(`Maximum value for the above array ${max}`);
    console.log(`Minimum value for the above array ${min}`);
};

// example array
const c = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49]

// displaying the original table
console.log(`Original array: ${c}`);

// run function for array c
minMaxArray(c);