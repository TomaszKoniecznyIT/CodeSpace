# create a list with the first two elements of the fibonacci series
fibonacci_series = [0,1]

# creates a loop from 2 to 50 (fifty first Fibonacci numbers)
for i in range (2,50):
    # adds the last two elements of the list and stores them at the end of the list
    fibonacci_series.append(fibonacci_series[-1]+fibonacci_series[-2])
print (fibonacci_series)
