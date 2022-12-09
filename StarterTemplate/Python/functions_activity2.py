# factorial function
def factorial(n):
    # displaying information when the given number is negative
    if n < 0:
        print("The factorial is not defined for negative number")
    # when the given number is 0
    elif n == 0:
        print("The factorial of 0! is 1 (0!=1)")
    # for the other cases, calculating the factorial of the number
    else:
        result = 1
        for i in range(1,n+1):
            result *= i
        print(f"The factorial of {n}! is {result}. {n}! = {result}")


# receiving a number from the user
n = int(input("Enter the number for which you want to calculate the factorial: "))
# function call
factorial(n)