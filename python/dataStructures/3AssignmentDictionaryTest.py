# just going through too see another way of using dict

name = raw_input("Enter file:")
if len(name) < 1 : name = "loremtext.txt"
handle = open(name)
text = handle.read()
# print len(text), text[:100]
words = text.split()
# print len(words)
# print words

cnt = dict()
for wrd in words:
	cnt[wrd] = cnt.get(wrd,0)+1
	# That line above is equivalent to this
	'''
	if wrd = cnt:
		cnt[wrd] = cnt[wrd]+1
	else:
		cnt[wrd] = 1
	'''
# print cnt.items()

maxval = None
maxword = None
for key, val in cnt.items():
	
	if maxval == None : maxval = val
	if maxval <val : 
		maxval = val
		maxword = key
	# print key, val, maxval

print maxword, maxval