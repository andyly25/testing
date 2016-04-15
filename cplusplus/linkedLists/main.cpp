/*main.cpp
 *LinkedList_project
 *created by: Andy Ly 4/14/16
 *This file is mainly for testing purposes
*/


#include "LinkedList.h"
using namespace std;

/*things to add:
*1. insert to front
*2. insert to end
*3. delete head
*4. delete end
*5. possibly take in userinput store into a file
*6. read from file
*/

int main(void){
	//note to self, change company to developer later
	//creating some unlinked nodes
	node *A = new node;
	A->game = "Undertale";
	A->company = "Toby Fox";

	node *B = new node;
	B->game = "Grandia";
	B->company = "Game Arts";

	node *C = new node;
	C->game = "Okami";
	C->company = "Clover Studio";

	node *D = new node;
	D->game = "Skyrim";
	D->company = "Bethseda Game Studios";

	node *E = new node;
	E->game = "Fire Emblem: Path of Radiance";
	E->company = "Intelligent Systems";

	node *F = new node;
	F->game = "League of Legends";
	F->company = "Riot Games";

	//now to build a small list by appending to end of list
	LinkedList myList;
	myList.insertNode(A,1);
	myList.insertNode(B,2);
	myList.insertNode(C,3);
	myList.insertNode(D,4);
	myList.printList();

	//inserting a node into the middle of the list
	myList.insertNode(E,2);
	myList.printList();

	//insert node at front of list
	myList.insertNode(F,1);
	myList.printList();

	//remove last node
	myList.removeNode(6);
	myList.printList();

	return 0;
}