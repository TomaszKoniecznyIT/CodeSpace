first_number = Number(prompt ("enter the first number: "));
second_number = Number(prompt ("enter the second number: "));
third_number = Number(prompt ("enter the third number: "));

if (first_number <= second_number && second_number <= third_number && first_number !== third_number){
    console.log("Increasing order")
} else if (first_number >= second_number && second_number >= third_number && first_number !== third_number){
    console.log("Decreasing order")
} else {
    console.log("Neither increasing or decreasing order")
}