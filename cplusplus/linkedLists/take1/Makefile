OBJS = LinkedList.o main.o
CC = g++
DEBUG = -g
CFLAGS = -Wall -c $(DEBUG)
LFLAGS = -Wall $(DEBUG)

LinkedList : $(OBJS)
	$(CC) $(LFLAGS) $(OBJS) -o LinkedList

LinkedList.o : LinkedList.h LinkedList.cpp
	$(CC) $(CFLAGS) LinkedList.cpp

main.o : LinkedList.h main.cpp
	$(CC) $(CFLAGS) main.cpp

clean : 
	\rm *.o LinkedList 