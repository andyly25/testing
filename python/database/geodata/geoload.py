import urllib
import sqlite3
import json
import time
import ssl

# If you are in China use this URL:
# serviceurl = "http://maps.google.cn/maps/api/geocode/json?"
# Base service URL for the API
serviceurl = "http://maps.googleapis.com/maps/api/geocode/json?"

# Deal with SSL certificate anomalies Python > 2.7
# scontext = ssl.SSLContext(ssl.PROTOCOL_TLSv1)
scontext = None

# creating a connection to our db
conn = sqlite3.connect('geodata.sqlite')
# a subconnection to db we store in variable 
cur = conn.cursor()

# create a table if not exist yet
cur.execute('''
CREATE TABLE IF NOT EXISTS Locations (address TEXT, geodata TEXT)''')

# loop through our where.data
fh = open("where.data")
count = 0
for line in fh:
    if count > 200 : break
    address = line.strip()
    # select geodata column and use logical key. We then convert address read, and
    # buffer it, if it happens to be unicode, force it to be what we want it to be
    print ''
    cur.execute("SELECT geodata FROM Locations WHERE address= ?", (buffer(address), ))

    # fetch first row (geodata) and check if exist, if none we pass and continue down
    try:
        data = cur.fetchone()[0]
        print "Found in database ",address
        continue
    except:
        pass


    print 'Resolving', address
    url = serviceurl + urllib.urlencode({"sensor":"false", "address": address})
    print 'Retrieving', url
    uh = urllib.urlopen(url, context=scontext)
    data = uh.read()
    print 'Retrieved',len(data),'characters',data[:20].replace('\n',' ')
    count = count + 1
    # check to see if we got good data (see if works or not: good JSON?)
    try: 
        js = json.loads(str(data))
        # print js  # We print in case unicode causes an error
    except: 
        continue

    if 'status' not in js or (js['status'] != 'OK' and js['status'] != 'ZERO_RESULTS') : 
        print '==== Failure To Retrieve ===='
        print data
        break

    # at this point we have data so we now insert into db 
    cur.execute('''INSERT INTO Locations (address, geodata) 
            VALUES ( ?, ? )''', ( buffer(address),buffer(data) ) )
    # now write into db
    conn.commit() 
    # wait a second
    time.sleep(1)

print "Run geodump.py to read the data from the database so you can visualize it on a map."
