'''
Goal: extracting the hour from the lines that begins with From and do a count
of occurence, then print out the results
'''

name = raw_input("Enter file:")
if len(name) < 1 : name = "mbox-short.txt"
handle = open(name)

counts = dict()
# go through each line of file
for line in handle:
    # strip new lines from each line
    line = line.rstrip()
    # skip if line is empty
    if len(line)<1:continue
    # skip if no start with From
    if not line.startswith('From '): continue
    # split line into worlds
    words = line.split()
    # knowing content of From line, we grab the word containing hour
    hourLine = words[-2]
    # split by :
    split = hourLine.split(':')
    # store hour into variable, I feel like I could combine together above
    hour = split[0]
    # do a count of items from counts
    counts[hour] = counts.get(hour, 0)+1

#print sorted([(v,k) for v, k in counts.items()])

# creating a list
lst = list()
# adding contents into a list
for k, v in counts.items():
    lst.append((k,v))
# sort the list
lst.sort()
# print what we want
for k,v in lst:
    print k, v