def prime_number(number):
    prime_num = True
    if number <= 1:
        return "the definition says that numbers greater than one..."
    else:
        for i in range(2,number):
            if number % i == 0:
                prime_num = False
                return f"The number {number} is not a prime number."
    
    return f"The number {number} is a prime number."


number = int(input("Enter a natural number greater than 1 to check: "))
print(prime_number(number))
