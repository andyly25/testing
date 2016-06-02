#Dictionary:
- What is a collection?
	- having multiple values in a single 'variable'
	- a "bag" of values, each with their own labels
	- different from lists since:
		- a list is a linear collection of values that stay in order
	- allows to do fast database-like operation in pYthon
	- similar to lists except using keys instead of numbers to look up values
	- Dictionaries can be used to count how many times we 'see' something
	- you can get a list of keys, values, or items (both: a list of tuples)
		- using something like blah.keys()
- **get** method for dictionary
	- checking to see if key already in dictionary and use default if not
		- e.g. print counts.get(name,0) # assume dict called counts with values name within
	- can also provide default 0, when key not yet in dict and add one

	```python
	counts = dict()
	names = ['bob', 'bob', 'bob', 'alpha', 'beta', 'alpha']
	for name in names:
		counts[name]=counts.get(name,0)+1 #The 0 represents default if not there
	print counts
	# result is: {'bob':3, 'alpha':2, 'beta':1}
	```
