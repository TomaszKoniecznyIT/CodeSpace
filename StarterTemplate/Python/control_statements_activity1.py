# Receiving two numbers from the user, conert to float and storing them in variables
number1 = float(input("Input the first number: "))
number2 = float(input("Input the second number: "))
number3 = float(input("Input the third number: "))

# check if they are all equal
if number1 == number2 and number1 == number3:
    print("All numbers are equal")
# check if they are all different
elif number1 != number2 and number2 != number3 and number3 != number1:
    print("All numbers are different")
# if they are neither equal nor different
else:
    print("Neither all are equal or different")
