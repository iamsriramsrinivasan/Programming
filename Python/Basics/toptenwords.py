# Top 10 word occurences from a file Python Sample
# Author: Sriram Srinivasan
# Written On: 08/09/2019

fileHandle = open('Hamlet.txt')

counts = dict()
for line in fileHandle:
    words = line.split()
    for word in words:
        counts[word] = counts.get(word, 0) + 1

lst = list()

for key, val in counts.items():
    newTuple = (val, key)
    lst.append(newTuple)

lst = sorted(lst, reverse=True)


for val, key in lst[:10]:
    print(key, val)
