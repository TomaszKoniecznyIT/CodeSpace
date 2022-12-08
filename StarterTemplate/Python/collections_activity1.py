
def sum_values_of_list(list1):
    sum = 0
    for i in list1:
        sum += i
    return sum

list1 = [1,2,3,4,5,6,7,8,9,10]
print(f"Sum values of list: {sum_values_of_list(list1)}")

print(sum(list1))