/*LinkedList.cpp
 *LinkedList_project
 *created by: Andy Ly 4/14/16
*/

#include "LinkedList.h"

//default constructor creates the head node
LinkedList::LinkedList(){
	head->game = "head contains no game data";
	head->company = "head contains no company data";
	head->next = NULL;
	listlength =0;
}

/*Setter takes adds node to list at given position.
 *Takes a node and list pos as parameters
 *pos must be between 1 and num of data nodes
 *returns true if operation is successful*/
bool LinkedList::insertNode(node *newNode, int position){
	if((position<=0)||(position>listlength+1)){
		cout<<"Error: given position is out of range \n";
		return false;
	}
	if(head->next ==NULL){
		head->next = newNode;
		listlength++;
		return true;
	}

	int count = 0;
	node *p = head;
	node *q = head;
	while(q){
		if (count == position){
			p->next = newNode;
			newNode->next = q;
			listlength++;
			return true;
		}
		p = q;
		q = p->next;
		count++;
	}
	if (count == position){
		p->next = newNode;
		newNode->next=q;
		listlength++;
		return true;
	}
	cout<<"error: node was not added to the list"<<endl;
	return false;
}

/*removes a node by given position.
 *return true if action was successful.*/
bool LinkedList::removeNode(int position){
	if((position<=0)||(position>listlength+1)){
		cout<<"Error: given position is out of range \n";
		return false;
	}
	if(head->next ==NULL){
		cout<<"Error: there is nothing to remove"<<endl;
		return false;
	}	
	int count = 0;
	node *p = head;
	node *q = head;
	while(q){
		if(count == position){
			p->next = q->next;
			delete q;
			listlength--;
			return true;
		}
		p = q;
		q = p->next;
		count++;
	}
	cout<<"Error: nothing was removed from the list"<<endl;
	return false;
}

/*prints each node in list consecutively from head
 *prints list data to console */
void LinkedList::printList(){
	int count = 0;
	node *p = head;
	node *q = head;
	cout<<"\n--------------------------\n";
	cout<<"Awesome Game List"<<endl;
	while(q){
		p=q;
		cout<< "\n--------------------------\n";
		cout<< "t position: "<< count << endl;
		cout<< "t game: "<< p->game << endl;
		cout<< "t developer: "<< p->company << endl;
		q = p->next;
		count++;
	}
}

//destructor to de-allocate memory used by list.
LinkedList::~LinkedList(){
	node *p = head;
	node *q = head;
	while(q){
		p=q;
		q=p->next;
		if(q) delete p;
	}
}
