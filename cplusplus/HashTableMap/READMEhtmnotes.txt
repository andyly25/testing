Hash Table/Map
-Stores data with key value pairs
-Hash functions accepts a key and return an output unique only to that specific key
	+AKA hashing, the concept that input and output has one to one correspondence to map info.
	+returns unique address in memory for that data
	+mostly uses modulo arithmetic. Preferably mod a prime number minimizes collisions
-designed to optimize searching, insertion, and deletion
-Hash collisions are when hash function returns same output for two distinct outputs.

implemented by using an array of linked lists

Big O efficiency:
Time complexity Average 
Accessing: 		- 
Search: 		O(1)
Insertion: 		O(1)
Deletion: 		O(1)

Time complexity Worst 
Accessing: 		- 
Search: 		O(n)
Insertion: 		O(n)
Deletion: 		O(n)

space complexity O(1)

Designing the Hash table:

[Item:
	key: string
	next: Item ptr
]

points to -----> 
[LinkedList:
	head: item ptr
	length: int
	insert(item:item)
	remove(key:string)
	get(key:string)
	printlist()
]

points to ----->
{HashTable:
	array: LinkedList ptr
	length: int
	insert(item:item)
	remove(key:string)
	get(key:string)
	printTable()
}