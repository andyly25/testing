/*
 * routines for processing bst. 
 * user types in strings and if not in tree inserts
 */

 #include <iostream>
 using namespace std;
 #include <string>

//obj of type TreeNode represents one node in bt of strings
struct TreeNode{
	string item;
	TreeNode *left;
	TreeNode *right;
	//constructor defined for convenience
	TreeNode(string str = ""){
		item = str;
		left = NULL;
		right = NULL;
	}
};

//add item to bst to which parameter root refers
//root passed by reference since value can change in case
//tree is empty
void treeInsert(TreeNode *&root, string newItem){
	if(root == NULL){
		root = new TreeNode(newItem);
		return;
	}
	else if(newItem<root->item){
		treeInsert(root->left, newItem);
	}else{
		treeInsert(root->right, newItem);
	}
}

//returns true if item is in bst to which root pts.
bool treeContains(TreeNode *root, string item){
	if(root==NULL){
		return false; //obviously doesn't have anything
	}else if(item ==root->item){
		return true; //jackpot!
	}else if(item < root->item){
		return treeContains(root->left, item); //check left subtree
	}else{
		return treeContains(root->right, item); //check right subtree
	}
}

//prints items in tree in postorder
void treeList(TreeNode *node){
	if(node!=NULL){
		treeList(node->left);
		cout<<" "<< node->item<<endl;
		treeList(node->right);
	}
}

int countNodes(TreeNode *node){
	if(node ==NULL){
		return 0; //tree empty, contains none
	}else{
		int leftcount = countNodes(node->left);
		int rightcount = countNodes(node->right);
		return 1+ leftcount + rightcount;
	}
}

int main(){
	TreeNode *root;
	root= NULL; //start with emty tree

	cout<<"This program stores string you enter in binary sort tree\n";
	cout<<"After each item is inserted, contents will be displayed\n";
	cout<<"Duplicate entries will be ignored"<<endl;
	while(true){
		cout<<"\nEnter a string to be inserted or press return to end"<<endl;
		string item;
		if(cin.peek()=='\n')
			break;
		cin>>item;
		cin.ignore(1000,'\n');
		if(treeContains(root,item)){
			//don't insert a second coopy 
			cout<<"\nThat item is already in the tree"<<endl;
		}else{
			treeInsert(root,item);
			cout<<"\nThe tree contains "<< countNodes(root)<<" items."<<endl;
			cout<<"\ncontents of tree \n"<<endl;
			treeList(root);
		}
	}
	cout<<"\n Exiting program"<<endl;
}
