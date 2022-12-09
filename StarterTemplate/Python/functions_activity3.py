# function checks whether a given number is a prime number
def prime_number(number):
    # If the given number is not greater than 1 (contrary to the definition), we display a message
    if number <= 1:
        return "the definition says that numbers greater than one..."
    
    else:
        for i in range(2,number):        # in the range from 2 to the number given - 1
            if number % i == 0:          # we check whether it divides completely
                return f"The number {number} is not a prime number."
    
    return f"The number {number} is a prime number."


number = int(input("Enter a natural number greater than 1 to check: "))
print(prime_number(number))
