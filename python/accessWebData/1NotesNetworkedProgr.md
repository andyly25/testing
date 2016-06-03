###TCP (Transport Control Protocol)
- Built on top of IP
	- Assumption lose data so retransmit data if possibly lost
	- handles flow control and provides reliable pipe
- computer prog makes something like telephone calls from one app to another
	- socket can be thought of as a connection
	- Process <-> Internet(socket) <-> Process
	- a lot of complicated magic happens in between
	- a way to look at a connection to another process on end of it and get data back
- port numbers
	- port: app/process specific software communication endpoint
	- allows many networked apps to coexist on same server

#### Sockets in Python
- has built in support for TCP sockets
```python
import sockets
# creating a porthole to the outside world, yay
# creating a stream socket: send, get, and keep track data
thissock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
thissock.connect(('www.py4inf.com',80))

```

####HTTP: Hyptertext transport protocol
- set of rules to allow browsers to retrieve web docs from servers all over Internet
- dominant app layer protocol on Internet
- invented to retrieve HTML, img, docs, etc
- concepts: make connection, request docs, retrieve, close connection
- URL: Uniform Resource Locator

####urllib in Python
- a Python library that does all socket work for you
	- views web pages like a file

```python
# Beginning of a webcrawler
import urllib
fhand = urllib.urlopen('http://www.py4inf.com/code/romeo.txt')

for line in fhand:
	print line.strip()
```

#####Web Scraping
- program/script pretend to be a browser and retrieves web pages
	- looks at page, extracts info, then look at more
	- referred to as **web crawling**, e.g. web engines scrape web pages
- reasons for scraping
	- pull data: e.g. social data
	- monitor site for updates
	- spider web to make a DB for search engine
	- grab your data from site with no export capability
- warning certain sites will be really grumpy if you scrape them
	- FB and Google were some honorable mentions

####Parsing HTML with Beautiful Soup
- from <www.crummy.com>
- throw all your "junky" HTML code and mix it into soup and out comes something beautiful that you can parse