# This example will look at a list of things
import xml.etree.ElementTree as ET

input = '''
<stuff>
    <users>
        <user x="2">
            <id>001</id>
            <name>Chuck</name>
        </user>
        <user x="7">
            <id>009</id>
            <name>Brent</name>
            </user>
        </users>
</stuff>'''
# creates something like a tree with stuff at the root
stuff = ET.fromstring(input)
# find everything from that route, user in this example
lst = stuff.findall('users/user')
print 'User count:', len(lst)

# loop to go through the list
for item in lst:
    # find xml nodes and gives us what we want
    print 'Name', item.find('name').text
    print 'Id', item.find('id').text
    print 'Attribute', item.get("x")

