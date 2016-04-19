/* C++ program to implement Circular linked list
 * note this is from http://www.sanfoundry.com/cpp-program-implement-circular-singly-linked-list/
 */
#include <iostream>
#include <cstdio>
#include <cstdlib>
using namespace std;

//node declaration
struct node{
	int data;
	struct node *next;
}*last;

//class declaration
class cll{
	public:
		void create_node(int value);
		void add_begin(int value);
		void add_after(int value, int position);
		void delete_element(int value);
		void search_element(int value);
		void display_list();
		void update();
		void sort();
		cll(){
			last = NULL;
		}
};

int grabElement();

//create circular linked list
void cll::create_node(int value){
	struct node *tmp;
	tmp = new(struct node);
	tmp->data = value;
	if(last == NULL){
		last = tmp;
		tmp->next = last;
	}else{
		tmp->next = last->next;
		last->next = tmp;
		last = tmp;
	}
}

//insert at beginning
void cll::add_begin(int value){
	if(last ==NULL){
		cout<<"First create the list."<<endl;
		return;
	}
	struct node *tmp;
	tmp = new(struct node);
	tmp->data = value;
	tmp->next = last->next;
	last->next = tmp;
}

//insertion at particular position
void cll::add_after(int value, int position){
	if(last ==NULL){
		cout<<"First create the list."<<endl;
		return;
	}
	struct node *tmp, *tmp2;
	tmp2 = last->next;
	for(int i = 0; i<position-1;i++){
		tmp2 = tmp2->next;
		if(tmp2==last->next){
			cout<<"There are less than "<<position<<" in the list"<<endl;
			return;
		}
	}
	tmp = new(struct node);
	tmp->next = tmp2->next;
	tmp->data = value;
	tmp2->next = tmp;
	//element inserted at the end
	if(tmp2 == last){
		last = tmp;
	}
}

//deleting an element from the list
void cll::delete_element(int value){
	struct node *tmp, *tmp2;
	tmp2= last->next;
	//if list has only one element
	if(last->next == last&& last->data == value){
		tmp = last;
		last = NULL;
		free(tmp);
		return;
	}
	//first element deletion
	if(tmp2->data == value){
		tmp = tmp2;
		last->next = tmp2->next;
		free(tmp);
		return;
	}
	while(tmp2->next!=last){
		//deletion of element in between
		if(tmp->next->data == value){
			tmp = tmp2->next;
			tmp2->next = tmp->next;
			free(tmp);
			cout<<"Element" <<value<<" deleted from list"<<endl;
		}
		tmp2=tmp2->next;
	}
	//deletion from last element
	if(tmp2->next->data == value){
		tmp = tmp2->next;
		free(tmp);
		last = tmp2;
		return;
	}
	cout<<"Element "<<value<<" not found in the list"<<endl;
}

//search element in the list
void cll::search_element(int value){
	struct node *f;
	int counter = 0;
	f = last->next;
	while(f!=last){
		counter ++;
		if(f->data == value){
			cout<<"Element"<<value<<" found at pos "<<counter<<endl;
			return;
		}
		f=f->next;
	}
	if(f->data == value){
		counter ++;
		cout<<"Element "<<value<<" found at pos "<<counter<<endl;
		return;
	}
	cout<<"Element "<<value<<" not found in the list"<<endl;
}

//display the list
void cll::display_list(){
	struct node *s;
	if(last == NULL){
		cout<<"List is empty, nothing to show"<<endl;
		return;
	}
	s=last->next;
	cout<<"Circular Link List: "<<endl;
	while(s!=last){
		cout<<s->data<<"->";
		s=s->next;
	}
	cout<<s->data<<endl;
}

//updata circular linked list
void cll::update(){
	int value, pos, i;
	if(last == NULL){
		cout<<"Error: Empty list, nothing to update"<<endl;
		return;
	}
	cout<<"Enter the node pos to be updataed: ";
	cin>>pos;
	cout <<"Enter the new value: ";
	cin>>value;
	struct node *tmp;
	tmp = last->next;
	for(i=0; i<pos-1; i++){
		if(tmp==last){
			cout<<"There are less than "<<pos<<" elements."<<endl;
			return;
		}
		tmp = tmp->next;
		cout<<"Node updated!"<<endl;
	}
}

//sort the List
void cll::sort(){
	struct node *s, *ptr;
	int tmp;
	if(last == NULL){
		cout<<"Error: Empty list, nothing to update"<<endl;
		return;
	}
	s=last->next;
	while(s!=last){
		ptr = s->next;
		while(ptr!=last->next){
			if((ptr!=last->next)&&(s->data>ptr->data)){
				tmp = s->data;
				s->data = ptr->data;
				ptr->data = tmp;
			}else{
				break;
			}
			ptr=ptr->next;
		}
		s=s->next;
	}
}

int grabElement(){
	int element;
	cin>>element;
	while(cin.fail()){
		cout<<"\nThis is not a number"<<endl;
		cin.clear();
		cin.ignore(256,'\n');
		cout<<"\nEnter a new number"<<endl;
		cin>>element;
	}
	return element;
}

//Main: has the menu
int main(){
	int choice, element, position;
	cll cl;
	while(1){
		cout<<endl<<"---------------------------"<<endl;
        cout<<endl<<"Circular singly linked list"<<endl;
        cout<<endl<<"---------------------------"<<endl;     
        cout<<"1.Create Node"<<endl;
        cout<<"2.Add at beginning"<<endl;
        cout<<"3.Add after"<<endl;
        cout<<"4.Delete"<<endl;
        cout<<"5.Search"<<endl;
        cout<<"6.Display"<<endl;
        cout<<"7.Update"<<endl;
        cout<<"8.Sort"<<endl;
        cout<<"9.Quit"<<endl;
        cout<<"Enter your choice (Number 1-9): ";
        cin>>choice;
        switch(choice){
        	case 1:
        		cout<<"Enter the element: ";
        		element = grabElement();
        		cl.create_node(element);
        		cout<<endl;
        		break;
        	case 2:
        		cout<<"Enter the element: ";
        		element = grabElement();
        		cl.add_begin(element);
        		cout<<endl;
        		break;
        	case 3:
        		cout<<"Enter the element: ";
        		element = grabElement();
        		cout<<"Insert element after position: ";
        		position = grabElement();
        		cl.add_after(element, position);
        		cout<<endl;
        		break;
        	case 4:
        		if(last == NULL){
        			cout<<"list is empty, nothing to delete"<<endl;
        			break;
        		}
        		cout<<"Enter the element for deletion: ";
        		element = grabElement();
        		cl.delete_element(element);
        		cout<<endl;
        		break;
        	case 5:
	        	if(last == NULL){
	        		cout<<"list is empty, can't search"<<endl;
	        		break;
	        	}
	        	cout<<"Enter the element to be searched: "<<endl;
	        	element = grabElement();
	        	cl.search_element(element);
	        	cout<<endl;
	        	break;
	        case 6:
	        	cl.display_list();
	        	break;
	        case 7:
	        	cl.update();
	        	break;
	        case 8:
	        	cl.sort();
	        	break;
	        case 9:
	        	exit(1);
	        	break;
	        default:
	        	cout<<"Please choose a valid option"<<endl;
        }
	}
}











