# Counting Words from a file Python Sample
# Author: Sriram Srinivasan
# Written On: 08/09/2019

counts = dict()
fileHandle = open('Hamletshort.txt')
content = fileHandle.read()
words = content.split()
print("File Content is : ", len(words))
print('File Read and now Counting.......')

for word in words:
    counts[word] = counts.get(word, 0) + 1
print('Total Word Count: ', counts)
