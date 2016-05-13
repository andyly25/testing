import sqlite3

#create a connection object 
conn = sqlite3.connect('emaildb.sqlite')
# cursor is a thing in which we can send commands
curr = conn.cursor()

# Drops the Count table if alreay exists
curr.execute('''
	DROP TABLE IF EXISTS Counts''')

# Now we create a Counts table
curr.execute(''' 
	CREATE TABLE COUNTS(org TEXT, count INTEGER)''')

# Grab the file
fname = raw_input('Enter file name: ')
if(len(fname)<1):fname='mbox.txt'
fh = open(fname)
# split the line with from and grab the email
for line in fh:
	if not line.startswith('From: '):continue
	# pieces = line.split('@')
	# org = pieces[1]
	pieces = line.split()
	email = pieces[1]
	morePieces = email.split('@')
	org = morePieces[-1]

	# ? is a placeholder, (email, ) is a tuple, first thing in tuple substituted with ?
	curr.execute('SELECT count FROM Counts WHERE org = ? ', (org, ))
	try: 
		count = curr.fetchone()[0]
		curr.execute('UPDATE Counts SET count=count+1 WHERE org = ?', (org, ))
	# If fails, there was no row, we are going to INSERT INTO Counts using email and count
	except:
		curr.execute('''INSERT INTO Counts (org, count)
			VALUES ( ?, 1 )''', (org, ) )
	# commit is basically if you did stuff in memory please write it back to disk
	conn.commit()

# Reading email and limiting to the first 10 after ordering
sqlstr = 'SELECT org, count FROM Counts ORDER BY count DESC LIMIT 10'

# 0 is email and 1 is count
for row in curr.execute(sqlstr):
	print str(row[0]), row[1]

curr.close()