arr = []
name = input("What is the name of the file you would like to read from?")
inp = open(name, "r")
#read line into array
for line in inp.readlines():

	#loop over the elements, split by whitespace
	#note there will be an error if there's a comma
	for i in line.split(","):
		#convert to float and append to the list
		arr.append(float(i))

# text = [word.strip(",.") for line in inp for word in line.split()]

print(arr)
print("\n/////////////////////\n")

import numpy as np 

#testing using numpy's genfromtxt
print (np.genfromtxt('color.txt', dtype='str', delimiter=",'"))
print("\n/////////////////////\n")
# using csv
import csv
inp2 = open("color.txt", "r")
# lines = inp2.splitlines()
arr2 = []
for l in csv.reader(inp2.readlines(), quotechar="'", delimiter=',', 
					quoting=csv.QUOTE_ALL, skipinitialspace=True):
	arr2.append(l)

print(arr2)
print("\n/////////////////////\n")

import re

inp = open("color.txt", "r")
text = inp.read()
inp.close()
#replaces everything not a letter
text = re.sub('[^a-z\ ]+'," ", text)
words = text.split()
print( words)
