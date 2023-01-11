function sumArray(array){
    sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    };
    return sum;
};

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`The sum of array is ${sumArray(a)}.`);
