# Receiving two numbers from the user, conert to float and storing them in variables
number1 = float(input("Input the first number: "))
number2 = float(input("Input the second number: "))

# performing division and save as result
result = number1/number2

# printing the result
print("The division of the first number and the second number is: ",result)

#another way to print the result
print(f"The division of the first number ({number1}) and the second number ({number2}) is: {result}.")