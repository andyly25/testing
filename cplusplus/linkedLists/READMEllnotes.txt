Linked List notes:
-Store data with nodes that points to other nodes

-Designed to optimize insertion and deletion
	+cons: slow at indexing and searching

-Doubly Linked Lists: nodes that reference to previous node

-circular linked list: linked list where tail points to the head(first node)

-Stack: usually with linked lists, but can also by arrays. 
	+is a LIFO (Last in first out)
	+head is the only place for insertion and removal

-Queue: are FIFO (First in first out)
	+made with doubly linked list that removes from head and adds to tail

Array 					vs 			Linked List:
Physically contiguous				Logically contiguous
fixed length						changeable length
access by index 					access by traversal
insertion is costly					insertion is efficient	


Big O efficiency: from bigocheatsheet.com
Time complexity Average 
Accessing: 		O(n) 
Search: 		O(n)
Insertion: 		O(1)
Deletion: 		O(1)

Time complexity Worst
Accessing: 		O(n) 
Search: 		O(n)
Insertion: 		O(1)
Deletion: 		O(1)

space complexity O(1)