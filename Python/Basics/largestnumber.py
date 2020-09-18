#Find the Large Number Python Sample
#Author: Sriram Srinivasan
#Written On: 07.6/09/2019

largeNumber = 1

for number in [10,5,8,23,56,78,12,99]:
    if(number > largeNumber):
        largeNumber = number
    print("Large Number: ", largeNumber)

print("Found the large number: " , largeNumber)