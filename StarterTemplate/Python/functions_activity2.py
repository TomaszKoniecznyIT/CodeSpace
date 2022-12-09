def factorial(n):
    if n < 0:
        print("The factorial is not defined for negative number")
    elif n == 0:
        print("The factorial of 0! is 1 (0!=1)")
    else:
        result = 1
        for i in range(1,n+1):
            result *= i
        print(f"The factorial of {n}! is {result}. {n}! = {result}")


n = int(input("Enter the number for which you want to calculate the factorial: "))
factorial(n)