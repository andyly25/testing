# most of the code from py4inf tutorials

''' We are reading some XML, parsing it, and do some sanity checking
	print and establishing primary keys and stick stuffs in 
'''

import xml.etree.ElementTree as ET 
import sqlite3

conn = sqlite3.connect('trackdb2.sqlite')
cur = conn.cursor()

# Make the tables
# Create the table if it does not already exist
cur.execute('''
	CREATE TABLE IF NOT EXISTS Artist(
		id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
		name TEXT UNIQUE
	)
	''')
cur.execute('''
	CREATE TABLE IF NOT EXISTS Genre(
		id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
		name TEXT UNIQUE
	)
	''')
cur.execute('''
	CREATE TABLE IF NOT EXISTS Album(
		id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
		artist_id INTEGER,
		title TEXT UNIQUE
	)
	''')
cur.execute('''
	CREATE TABLE IF NOT EXISTS Track(
		id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
		title TEXT UNIQUE,
		album_id INTEGER,
		genre_id INTEGER,
		len INTEGER, rating INTEGER, count INTEGER
	)
	''')

# note python 3 raw_input is just input()
fname = raw_input('Enter file name: ')
if(len(fname)<1):fname = 'Library.xml'

# function to parse key/value pairs out of this XML dictionary object
def lookup(d, key):
	found = False
	for child in d:
		if found : return child.text
		if child.tag == 'key' and child.text == key:
			found = True
	return None

# Element tree is doing the file reading for us
# and we would get an object that we can work with
stuff = ET.parse(fname)
# we go through a dictionary 3 level deep using findall
all = stuff.findall('dict/dict/dict')
# note python3 print is print(stuffs)
print 'Dict count: ', len(all)
for entry in all:
	if(lookup(entry, 'Track ID') is None):continue
	name 	= lookup(entry, 'Name')
	artist 	= lookup(entry, 'Artist')
	album 	= lookup(entry, 'Album')
	count 	= lookup(entry, 'Play Count')
	rating 	= lookup(entry, 'Rating')
	length 	= lookup(entry, 'Total Time')
	genre	= lookup(entry, 'Genre')

	# sanity check see if it contains what we want
	if name is None or artist is None or album is None or genre is None:
		continue

	print name, artist, album, count, rating, length, genre

	# insert if not there, ignore if already there
	cur.execute('''INSERT OR IGNORE INTO Artist (name)
		VALUES ( ? )''', (artist, ) )
	# get id of recently inserted one or one already in there
	cur.execute('SELECT id FROM Artist WHERE name = ? ', (artist, ))
	artist_id = cur.fetchone()[0]

	cur.execute('''INSERT OR IGNORE INTO Genre (name)
		VALUES ( ? )''', (genre, ) )
	cur.execute('SELECT id FROM Genre WHERE name = ? ', (genre, ))
	genre_id = cur.fetchone()[0]

	cur.execute('''INSERT OR IGNORE INTO Album (title, artist_id)
		VALUES ( ?, ? )''', (album, artist_id))
	cur.execute('SELECT id FROM Album WHERE title = ? ', (album, ))
	album_id = cur.fetchone()[0]

	# if we had duplicate data, if insert failed (because title is unique key), we update using replace
	cur.execute('''INSERT OR REPLACE INTO Track 
		(title, album_id, genre_id, len, rating, count)
		VALUES ( ?, ?, ?, ?, ?, ? )''', 
		(name,album_id, genre_id, length,rating, count ))
	cur.execute('SELECT id FROM Artist WHERE name = ? ', (artist, ))
	cur.execute('SELECT id FROM Genre WHERE name = ? ', (genre, ))

	conn.commit()

# Sample of an SQL command used
 # 	  SELECT Track.title, Artist.name, Album.title, Genre.name 
 #    FROM Track JOIN Genre JOIN Album JOIN Artist 
 #    ON Track.genre_id = Genre.ID and Track.album_id = Album.id 
 #        AND Album.artist_id = Artist.id
 #    ORDER BY Artist.name LIMIT 3