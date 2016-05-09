import re 
hand = open('loremtext.txt')
for line in hand:
	line = line.rstrip()
	if re.search('From:', line):
		print(line)

# #another method
# hand = open('loremtext.txt')
# for line in hand:
# 	line = line.rstrip()
# 	if line.find('From:')>=0:
# 		print (line)
