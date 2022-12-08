def min_and_max (list1):
    min=list1[0]
    max=list1[0]
    for i in list1:
        if min > i:
            min = i
        if max < i:
            max = i
    return (min, max)


list1 =[25, 14, 56, 15, 36, 56, 77, 18, 29, 49]
print(f"Orginal List: {list1}")
print(f"Maximum value for the above list = {min_and_max(list1)[-1]}")
print(f"Minimum value for the above list = {min_and_max(list1)[0]}")



print(list1)
print(min(list1))
print(max(list1))