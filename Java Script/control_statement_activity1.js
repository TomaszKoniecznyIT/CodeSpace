// receiving three numbers from the user and storing them as numbers in variables
first_number = Number(prompt ("enter the first number: "));
second_number = Number(prompt ("enter the second number: "));
third_number = Number(prompt ("enter the third number: "));

// check if they are all equal then if they are different
if (first_number === second_number && first_number === third_number) {
    console.log("All numbers are equal")
} else if (first_number !== second_number && first_number !== third_number && second_number !== third_number){
    console.log("All numbers are different")
} else {
    console.log("Neither all are equal or different")
};