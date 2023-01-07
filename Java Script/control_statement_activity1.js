first_number = Number(prompt ("enter the first number: "))
second_number = Number(prompt ("enter the second number: "))
third_number = Number(prompt ("enter the third number: "))

if (first_number === second_number && first_number === third_number) {
    console.log("All numbers are equal")
} else if (first_number !== second_number && first_number !== third_number && second_number !== third_number){
    console.log("All numbers are different")
} else {
    console.log("Neither all are equal or different")
}