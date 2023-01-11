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

const c = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49]
console.log(`Original array: ${c}`);
minMaxArray(c);