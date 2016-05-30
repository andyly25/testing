''' Week 4 assignment
    The JSON file contains data in [name, course, role]
    The code reads JSON data, parses the JSON data, and then
    loops through the JSON records one at a time
    Inserts into User table, insert into Course table, and use
    foreign key to connect them together
'''

import json
import sqlite3

# connection to database
conn = sqlite3.connect('rosterdb.sqlite')
cur = conn.cursor()

# executescript allows multiple lines of SQL commands to be executed
# Do some setup, and there's a junction table Member
cur.executescript('''
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Member;
DROP TABLE IF EXISTS Course;

CREATE TABLE User (
    id     INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    name   TEXT UNIQUE
);

CREATE TABLE Course (
    id     INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    title  TEXT UNIQUE
);

CREATE TABLE Member (
    user_id     INTEGER,
    course_id   INTEGER,
    role        INTEGER,
    PRIMARY KEY (user_id, course_id)
)
''')

fname = raw_input('Enter file name: ')
if ( len(fname) < 1 ) : fname = 'roster_data.json'

# [
#   [ "Charley", "si110", 1 ],
#   [ "Mea", "si110", 0 ],

# reading the JSON file
str_data = open(fname).read()
json_data = json.loads(str_data)

# pulling out the entries and storing into variables
for entry in json_data:

    name = entry[0];
    title = entry[1];
    role_id = entry[2];

    # print name, title, role_id
    # IGNORE means if this insert causes an error, does nothing
    cur.execute('''INSERT OR IGNORE INTO User (name) 
        VALUES ( ? )''', ( name, ) )
    cur.execute('SELECT id FROM User WHERE name = ? ', (name, ))
    user_id = cur.fetchone()[0]

    cur.execute('''INSERT OR IGNORE INTO Course (title) 
        VALUES ( ? )''', ( title, ) )
    cur.execute('SELECT id FROM Course WHERE title = ? ', (title, ))
    course_id = cur.fetchone()[0]

    cur.execute('''INSERT OR REPLACE INTO Member
        (user_id, course_id, role) VALUES ( ?, ?, ? )''', 
        ( user_id, course_id, role_id ) )

    conn.commit()

    # Run this command to get the result you want
    # SELECT hex(User.name || Course.title || Member.role ) AS X FROM 
    # User JOIN Member JOIN Course 
    # ON User.id = Member.user_id AND Member.course_id = Course.id
    # ORDER BY X
    