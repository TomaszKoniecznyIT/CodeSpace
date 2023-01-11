// a function that calculates the sum of any array
// taking successive elements of the array sums up and stores in the sum variable
// then returns that sum divided by the number of elements in the array
function averageArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    };
    return sum / array.length;
};

// example array
const b = [20, 30, 25, 35, -16, 60, -100];

// displaying together with calling the function for array a
console.log(`The average of array is ${averageArray(b)}.`);
