import re

file = open('regex_sum_272107.txt')
numsum = 0
for line in file:
	x = re.findall('([0-9]+)', line)
	# print(x)
	for i in x:
		num = float(i)
		numsum += num
print(numsum)
