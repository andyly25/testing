import urllib
import xml.etree.ElementTree as ET

serviceurl = 'http://python-data.dr-chuck.net/comments_272109.xml'
sum = 0

# grab data from url
data = urllib.urlopen(serviceurl).read()
# takes string data and pass into tree
tree = ET.fromstring(data)
# find all occurenct of count
counts = tree.findall('.//count')
# loop through and add sum
for count in counts:
    sum += int(count.text)

print 'sum is: ', sum
