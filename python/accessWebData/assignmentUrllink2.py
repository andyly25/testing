# Note - this code must run in Python 2.x and you must download
# BeautifulSoup.py
# Into the same folder as this program

# Assignment Following Links in HTML Using BeautifulSoup

import urllib
from BeautifulSoup import *
# grab user input for website
url 		= raw_input('Enter URL - ')
# for count
count 		= raw_input('Enter count - ')
# for position
position 	= raw_input('Enter Position - ')

taglist = list()
urllist = list()

for i in range(int(count)):
	# reads all: collapses eveything into one line
	html = urllib.urlopen(url).read()
	# soup object for you to make use of it
	soup = BeautifulSoup(html)

	# retrieves list of anchor tags where each 
	# tag is like a dictionary of HTML attributes
	tags = soup('a')

	# add each tags into a list
	for tag in tags:
		taglist.append(tag)

	# grab at position 3: 0, 1, [2] thus subtract by 1
	url = taglist[int(position)-1].get('href', None)
	print "Retrieving: ", url
	# stores all url at 3rd position
	urllist.append(url)
	# resets the list
	taglist = list()
# print out what you want
print 'Last name: ', urllist[-1]