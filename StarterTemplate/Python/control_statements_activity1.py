# Receiving three numbers from the user, conert to float and storing them in variables
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


# adding another method
set_of_numbers = {number1, number2, number3}   
# we can check how many elements the set made of given numbers has
if len(set_of_numbers) == 1: # 1 item - 3 of the same numbers
    print("All numbers are equal")
if len(set_of_numbers) == 2: # 2 items - 2 same numbers plus 1 different
    print("Neither all are equal or different")
if len(set_of_numbers) == 3: # 3 items - 3 different numbers
    print("All numbers are different")

