//Note this cpp file doesn't have a main

//Basic structure of a binary tree is
struct TreeNode{
	int item; 			//data in the node
	TreeNode *left; 	//pointer to left subtree
	TreeNode *right		//pointer to right subtree
};

/*
 * left and right pointers can be NULL or point to other obj
 * of type TreeNode. A node that points to another is called
 * the parent while the one pointed to is the child. 
 * The root is the node with no parents. A node with no 
 * children is called a leaf. Both left and right are NULL
*/

//count nodes in btree to which root points and returns
int countNodes(TreeNode *root){
	//tree is empty, no nodes
	if(root == NULL)
		return 0; 
	else{
		//start by counting the root
		int count =1; 
		//add number nodes in left subtree
		count += countNodes(root->left);
		//add number nodes in right subtree
		count+- countNodes(root->right);
		return count; //return total
	}
}

//function to print using preorder traversal
//root first, then left, then right subtree
void preorderPrint(TreeNode *root){
	if(root!=NULL){
		cout<< root->item<< " ";
		preorderPrint(root->left);
		preorderPrint(root->right);
	}
}

//postorder is left, then right, then root node
//inorder is left, root, then right
//NOTE: all you need to do is move around those three
//statements in the if statements to match which type

/*
 * preorder is used to clone a tree, count leaves, convert
 * expression tree to prefix notation
 * postorder: used to convert port fix notations to expression tree
 * used heavily in calculator based programs. Also stack based program lang.
 * Inorder: used to sort binary search tree
 */