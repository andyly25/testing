'''
Assignment for week 5
Combo of everything else I learned from previous weeks
'''

name = raw_input("Enter file:")
if len(name) < 1 : name = "mbox-short.txt"
handle = open(name)
counts = dict()

for line in handle:
    line = line.strip("\n ' '")
    if len(line)<1: continue
    if not line.startswith('From '): continue
    words = line.split()
    address = words[1]
    counts[address] = counts.get(address,0)+1
    
bigCount = None
bigWord = None
for word, count in counts.items():
    if bigCount is None or count>bigCount:
        bigWord = word
        bigCount = count

print bigWord, bigCount