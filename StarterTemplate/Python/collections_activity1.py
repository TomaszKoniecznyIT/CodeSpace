# a function that sums the values of any numerical list
def sum_values_of_list(list1):
    # set the sum variable to 0
    sum = 0
    # each subsequent element of the list is added to the sum
    for i in list1:
        sum += i
    return sum

list1 = [1,2,3,4,5,6,7,8,9,10]
print(f"Sum values of list: {sum_values_of_list(list1)}.")

# the easiest way is to use the sum function
print(sum(list1))