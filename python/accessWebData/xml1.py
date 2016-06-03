# built into Python is a XML parsing mechanism
# we use ET as a shortcut to this
import xml.etree.ElementTree as ET

# use of triple qutes means one big string
data = '''
<person>
  <name>Bob</name>
  <phone type="intl">
     +1 734 303 4456
   </phone>
   <email hide="yes"/>
</person>'''

# take string data and pass into element tree library and parse the string 
tree = ET.fromstring(data)
# basically says: go find the tag 'name' then print out
print 'Name:',tree.find('name').text
print 'Attr:',tree.find('email').get('hide')
