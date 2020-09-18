# Find the Smallest Number Python Sample
# Author: Sriram Srinivasan
# Written On: 07/09/2019

smallestNumber = None

for number in [10, 5, 8, 23, 56, 78, 12, 99]:
    if smallestNumber is None:
        smallestNumber = number
    elif(number < smallestNumber):
        smallestNumber = number
    print("Small Number: ", smallestNumber)

print("Found the Smallest number: ", smallestNumber)
