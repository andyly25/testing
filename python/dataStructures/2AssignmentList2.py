fname = raw_input("Enter file name: ")
if len(fname) < 1 : fname = "mbox-short.txt"

fh = open(fname)
count = 0
for line in fh:
    line = line.rstrip()
    # checks if empty, 3 ways
    if len(line)<1 : continue
    # if line == [] :continue
    # if line == '' : continue
    if not line.startswith('From '): continue
    words = line.split()
    address = words[1]
    count+=1
    print(address)

print "There were", count, "lines in the file with From as the first word"
