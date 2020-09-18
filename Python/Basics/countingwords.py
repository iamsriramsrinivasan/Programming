# Counting Words Python Sample
# Author: Sriram Srinivasan
# Written On: 08/09/2019

counts = dict()
line = input('Enter a line of text: ')
words = line.split()

print ('You Entered: ', words)
print('Counting')

for word in words:
    counts[word] = counts.get(word,0) +1
print('Word Count: ', counts)
