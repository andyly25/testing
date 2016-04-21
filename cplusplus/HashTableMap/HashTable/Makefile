OBJS = HashTable.o LinkedList.o main.o
CC = g++
DEBUG = -g
CFLAGS = -Wall -c $(DEBUG)
LFLAGS = -Wall $(DEBUG)

HashTable : $(OBJS)
	$(CC) $(LFLAGS) $(OBJS) -o HashTable

HashTable.o : HashTable.h LinkedList.h HashTable.cpp
	$(CC) $(CFLAGS) HashTable.cpp

LinkedList.o : LinkedList.h LinkedList.cpp
	$(CC) $(CFLAGS) LinkedList.cpp

main.o : LinkedList.h HashTable.h main.cpp
	$(CC) $(CFLAGS) main.cpp

clean : 
	\rm *.o HashTable