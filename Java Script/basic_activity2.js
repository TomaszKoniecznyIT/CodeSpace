// receiving two numbers from the user and storing them in variables
first_number = Number(prompt ("enter the first number: "))
second_number = Number(prompt ("enter the second number: "))

// displaying the result
// in the case of division by 0, instead of the result, the display of the message cannot be divided by 0
console.log(`The division of ${first_number} and the ${second_number} is: ${second_number !== 0 ? first_number/second_number : "cannot be divided by 0 !!!" }.`)