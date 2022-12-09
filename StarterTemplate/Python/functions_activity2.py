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


# or another method

def get_factorial(number):
    # we set the result to 1
    result = 1
    # we create a loop that executes until the number reaches 0
    while number > 0:
        result *= number  # we multiply the result by the number
        number -= 1       # we decrease the number by 1
    return result


print(get_factorial(n))