# Finding words that has more occurences from a file Python Sample
# Author: Sriram Srinivasan
# Written On: 08/09/2019

fileHandle = open('Hamlet.txt')

counts = dict()
for line in fileHandle:
    words = line.split()
    for word in words:
        counts[word] = counts.get(word, 0) + 1

maxCount = 0
bigWord = None

for word, count in counts.items():
    if bigWord is None or count > maxCount:
        bigWord = word
        maxCount = count

print("BigWord : ", '"', bigWord, '"', "Max Occurance is: ", maxCount)
