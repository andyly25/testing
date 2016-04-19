/*	LinkedList.h
*	Linked_List project
*	created by: Andy Ly 4/14/16
*/

#ifndef LinkedList_h
#define LinkedList_h

#include <iostream>
#include <string>
using namespace std;

//node structs contain data and pointer to the next node
struct node{
	string company;
	string game;
	node *next;
};

//LinkedList is a list of singly linked nodes
//in this project it will represent a gamelist
class LinkedList{
private:
	//head of list has no game data, but points to the list
	node *head;
	int listlength;
public:
	//default constructor creates head node.
	LinkedList();
	
	/*Setter takes adds node to list at given position.
	 *Takes a node and list pos as parameters
	 *pos must be between 1 and num of data nodes
	 *returns true if operation is successful*/
	bool insertNode(node *newNode, int position);

	/*removes a node by given position.
	 *return true if action was successful.*/
	bool removeNode(int position);

	/*prints each node in list consecutively from head
	 *prints list data to console */
	void printList();

	//destructor to de-allocate memory used by list.
	~LinkedList();
};
#endif