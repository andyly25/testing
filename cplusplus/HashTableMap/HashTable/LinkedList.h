/*
 * LinkedList.h
 * This header file contains Linked List class declarations
 */

#ifndef LinkedList_h
#define LinkedList_h

#include <iostream>
#include <string>
using namespace std;

//list items are keys with ptrs to next item
struct Item{
	string key;
	Item *next;
};

class LinkedList{
private:
	//head is reference to list of data nodes
	Item *head;
	//length is num of data nodes
	int length;
public:
	//constructs empty LL obj. Creates head node and sets length to 0
	LinkedList();

	//inserts item at end of list
	void insertItem(Item *newItem);

	//removes item from list by item key, returns true if ok
	bool removeItem(string itemKey);

	//searches for an item by key
	//returns reference to first match, otherwise NULL
	Item *getItem(string itemKey);

	//displays list contents to console
	void printList();

	//returns length of list
	int getLength();

	//de-allocates list memory when program terminates
	~LinkedList();
};

#endif
