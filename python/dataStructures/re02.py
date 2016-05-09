#short look into regular expressions

#If you want to look for string at the beginning

import re
hand = open('loremtext.txt')
for line in hand:
	line = line.rstrip()
	if re.search('^From:', line):
		print(line)

# #another method
# hand = open('loremtext.txt')
# for line in hand:
# 	line = line.rstrip()
# 	if line.startswith('From:'):
# 		print (line)

# The . is a wild-card character
# matches any character. * = any number of times
# ^ match start of line
# \S = match any non-whitespace character
# + = one or more times
# ^X-\S+:
# adding ? after * and + is the nongreedy method

# if we want matching strings to be extracted use re.findall()
# eg. y = re.findall('[0-9]+', x) // let's say x = 'I love 2 eat 8 burgers'
# this returns ['2', '8']

# \s + @ + \s would return at least one nonwhitespace to each side

# The double split pattern
#let x = 'From: blha.sdas@uct.ac.pl sun feb 5 07:21:43 2025'
# words = line.split() //splits all into words by whitespaces
# email = words[1]
# pieces = email.split('@')
# print pieces[1]  #uct.ac.pl

#with regular expression
# import re
# x = 'From: blha.sdas@uct.ac.pl sun feb 5 07:21:43 2025'
# y = re.findall('@([^ ]*)', x) # [^ ] means anything but (not)
# print x  # ['uct.sc.pl']
