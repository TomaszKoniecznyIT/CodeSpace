# Receiving 3 numbers from the user, conert to float and storing them in variables
number1 = float(input("Input the first number: "))
number2 = float(input("Input the second number: "))
number3 = float(input("Input the third number: "))

if number1 >= number2 and number2 >= number3 and number1 != number3:
    print("Numbers in descending order")
elif number1 <= number2 and number2 <= number3 and number1 != number3:
    print("Numbers in increasing order")
elif number1 == number2 and number2 == number3:
    print("all numbers are equal")
else:
    print("Neither increasing or decreasing order")
