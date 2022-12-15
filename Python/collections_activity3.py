# function to calculate min and max from list
def min_and_max (list1):
    # I set the first element of the list to min and max
    min=list1[0]
    max=list1[0]
    # going through the next elements of the list, I change the min and max when they are smaller or larger than the current min and max
    for i in list1:
        if min > i:
            min = i
        if max < i:
            max = i
    return (min, max) # returns a pair of numbers (which 1 is min and 2 is max)


# sample list
list1 =[25, 14, 56, 15, 36, 56, 77, 18, 29, 49]
print(f"Orginal List: {list1}")
#[-1] because max is the last of a pair of numbers
print(f"Maximum value for the above list = {min_and_max(list1)[-1]}") 
# [0] because min is the first of a pair of numbers
print(f"Minimum value for the above list = {min_and_max(list1)[0]}")


# or simpler
print(list1)
print(min(list1))
print(max(list1))