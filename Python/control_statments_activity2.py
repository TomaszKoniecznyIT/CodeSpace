# Receiving 3 numbers from the user, conert to float and storing them in variables
number1 = float(input("Input the first number: "))
number2 = float(input("Input the second number: "))
number3 = float(input("Input the third number: "))


# checking whether they are decreasing (the last condition excludes the situation when all numbers are equal)
if number1 >= number2 and number2 >= number3 and number1 != number3:
    print("Numbers in descending order")

# checking whether they are  (the last condition excludes the situation when all numbers are equal)    
elif number1 <= number2 and number2 <= number3 and number1 != number3:
    print("Numbers in increasing order")
#   check if they are equal
elif number1 == number2 and number2 == number3:
    print("all numbers are equal")
else:
    print("Neither increasing or decreasing order")
