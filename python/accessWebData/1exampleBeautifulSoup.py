import urllib
from BeautifulSoup import *

url = raw_input('Enter - ')
# reads all: collapses eveything into one line
html = urllib.urlopen(url).read()
# soup object for you to make use of it
soup = BeautifulSoup(html)

# retrieves list of anchor tags where each 
# tag is like a dictionary of HTML attributes
tags = soup('a')

for tag in tags:
	print tag.get('href', None)