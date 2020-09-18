# Count Number of Lines from a file Python Sample
# Author: Sriram Srinivasan
# Written On: 07/09/2019

fileHandle = open('Hamlet.txt')
count = 0;

for line in fileHandle:
    count = count + 1
print('File has ' , count , '  lines')