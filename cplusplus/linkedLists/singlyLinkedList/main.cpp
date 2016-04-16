//Quick singly linked list:
//Note to self, to compile on mac use:
// g++ -o someExecutableName main.cpp
// gcc or clang doesn't work or I'm not too used to macs

#include <iostream>
using namespace std;

struct node{
	int num;
	node *next;
};

bool isEmpty(node *head);
char menu();
void insertAsFirstElement(node *&head, node *&last, int num);
void insert(node *&head, node *&last, int num);
void remove(node *&head, node *&last);
void showList(node *current);

bool isEmpty(node *head){
	if(head ==NULL){
		return true;
	}else{
		return false;
	}
}

char menu(){
	char choice;
	cout<<"\nMenu"<<endl;
	cout<<"1. Add an item. \n";
	cout<<"2. Remove an item. \n";
	cout<<"3. Show the List. \n";
	cout<<"4. Exit \n\n";

	cin>>choice;
	return choice;

}

void insertAsFirstElement(node *&head, node *&last, int num){
	node *tmp = new node;
	tmp->num = num;
	tmp->next = NULL;
	head = tmp;
	last = tmp;
}

void insert(node *&head, node *&last, int num){
	if(isEmpty(head)){
		insertAsFirstElement(head, last, num);
	}else{
		node *tmp = new node;
		tmp->num = num;
		tmp->next = NULL;
		last->next = tmp;
		last = tmp;
	}
}

void remove(node *&head, node *&last){
	if(isEmpty(head)){
		cout<<"\nError: The list is empty"<<endl;
	}else if(head ==last){
		delete head;
		head = NULL;
		last = NULL;
	}else{
		node *tmp = head;
		head = head->next;
		delete tmp;
	}
}

void showList(node *current){
	if(isEmpty(current)){
		cout<<"\nThe list is currently empty"<<endl;
	}else{
		cout<<"\nThe list contains: \n";
		while(current!=NULL){
			cout<<current->num<<endl;
			current = current->next;
		}
	}
}

int main(){
	node *head = NULL;
	node *last = NULL;
	char choice;
	int num;
	do{
		choice = menu();
		switch(choice){
			case '1': cout<<"\nPlease enter a number: "<<endl;
				cin>>num;
				while(cin.fail()){
					cout<<"\nThis is not a number"<<endl;
					cin.clear();
					cin.ignore(256,'\n');
					cin>>num;
				}
				insert(head, last, num);
				break;
			case '2': remove(head, last);
				break;
			case '3': showList(head);
				break;
			case '4': cout<<"\nSystem exit"<<endl;
				return 0;
			default: cout<< "\nError: Please type in 1, 2, 3, or 4 "<<endl;
		}
	}while(choice !=4);

	return 0;
}