# I am confused whether it is about giving elements from element 0 to element 50 or to an element not exceeding 50 or maybe the first 50 elements of the Fibonacci sequence



# METHOD 1 - fifty first Fibonacci numbers
# create a list with the first two elements of the fibonacci sequence
fibonacci_series = [0,1]
# creates a loop from 2 to 50 (fifty first Fibonacci numbers)
for i in range (2,50):
    # adds the last two elements of the list and stores them at the end of the list
    fibonacci_series.append(fibonacci_series[-1]+fibonacci_series[-2])
print (fibonacci_series)



# METHOD 2 - to n element (Zero is the zero element of the Fibonacci sequence)
# This is a program to display to n elements of the Fibonacci sequence
def fibonacci_n_series (n):
    fibonacci = [0,1]
    if n == 0:
        return [0]
    if n == 1:
        return fibonacci
    for i in range(n-1):
        fibonacci.append(fibonacci[-2]+fibonacci[-1])
    return fibonacci

n = int(input("Specify how many elements of the Fibonacci sequence to display: "))
print(fibonacci_n_series(n))