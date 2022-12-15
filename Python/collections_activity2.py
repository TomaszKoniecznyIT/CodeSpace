# the function calculates the average value of a numbers list
def average_value_of_list (lista1):
    sum = 0
    for i in lista1:
        sum +=i
    # the len() function returns the number of elements
    return sum/len(lista1)


# sample list
list1 = [20, 30, 25, 35, -16, 60, -100]
# I added a rounding function to 2 places after .
print(f"Average volue of the list elements is: {round(average_value_of_list(list1),2)}.")



# the easiest way is to use the sum and lenfunction
print(sum(list1)/len(list1))