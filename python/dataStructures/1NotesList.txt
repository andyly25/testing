#Python List
- What is it?
	- A kind of **collection** allow you to put many values in a variable
	- Most variables contains only 1 variables
	- List constants are surrounded by square brackets 
		- with elements separated by commas
			- list elements starts with 0
		- can be any Python object or empty
		- since lists are **"mutable"** you can change elements using the index, unlike strings
###Useful List Things
- **len()** tells us the number of elements of any set or sequence
- **range()** returns a list of number returning from 0 to parameter - 1
- you can concatenate lists using **+**, this adds elements of lists together into one list
- slice lists using **:**
	- assume list = [a,b,c,d,e,f]
	- list[:3] goes from 0 to 2, [a,b,c]
	- list[1:4] goes from 1 to 3 [b,c,d]
	- list[3:] = [d,e,f]
	- list[:] = [a,b,c,d,e,f]
- List methods
	- append, count, extend, index, insert, pop, remove, reverse, sort
- you can use **in** and **not in** to determine if something is in the list
- **sort()** can ... sort the list a..z and etc
- can use min, max, sum and etc
- **split()**: breaks a string into parts and produces a list of strings
	- by default splits by whitespace, but you can specify with anything e.g. split(',')
	- you can split many times to get things you need

```python
# simple example using range and len
fruits = ['apple', 'bapple', 'snapple']
for i in range(len(fruits)):
	fruit = fruits[i]
	print ("Time to slice: ", fruit)

#Averaging a list of nums
total = 0
cnt = 0
while True:
	# remember python3 uses plain input, 2 uses raw_input
	inp = raw_input("Enter a number or stop when done: ")
	if inp == 'stop' : break
	value = float(inp)
	total += value
	cnt+=1
average = total/cnt

#Another method using lists
numList = list()
while True:
	# remember python3 uses plain input, 2 uses raw_input
	inp = raw_input("Enter a number or stop when done: ")
	if inp == 'stop' : break
	value = float(inp)
	numList.append(value)
average = sum(numList)/len(numList)
print('Average: ', average)

```

