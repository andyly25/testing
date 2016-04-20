/* HashTable.h
 * I followed along a tutorial from pumpkinprogrammer.com
 * This header contains Hash Table class declarations
 * Array elements consists of LL objects
 * Note in case of confusion:
 * HT = Hash Table, LL = Linked Lists
 */

#ifndef HashTable_h
#define HashTable_h

#include "LinkedList.h"

//Hash table objects store fixed # of Linked Lists
Class HashTable{
private:
	//array is ref to an array of LL
	LinkedList *array;

	//length is size of HT array
	int length;

	//returns an array location for given item key
	int hash(string itemKey);
public:
	//constructs empty HT object
	//array length 13 by default
	HashTable(int tableLength = 13);

	//adds an item to the HT.
	void insertItem(Item *newItem);

	//Deletes an item by key from HT, returns true if ok
	bool removeItem(string itemKey);

	//returns an item from the HT by key.
	//if not found, returns null ptr
	Item *getItemByKey(string itemKey);

	//displays contents of HT to console window
	void printTable();

	//prints histogram show item distribution
	void printHistogram();

	//returns # of locations in HT
	int getLength();

	//returns # of items in HT
	int getNumberOfItems();

	//De-allocates all memory used for Hash Table.
	~HashTable();
};

#endif

