 pre, code { white-space: pre-line; min-width: 400px; } 

Node Class API
==============

| Function | Arguments | Returns | Directions | Example |
| --- | --- | --- | --- | --- |
| Node.constructor | (Data, Node) | Node | Creates a class instance to represent a node. The node should have two properties, 'data' and 'next'. Accept both of these as arguments to the 'Node' constructor, then assign them to the instance as properties 'data' and 'next'. If 'next' is not provided to the constructor, then default its value to be 'null'. | const n = new Node('There');<br>            n.data // 'Hi'<br>            n.next // null<br>            const n2 = new Node('Hi', n);<br>            n.next // returns n |

LinkedList Class API
====================

| Function | Arguments | Returns | Directions | Example |
| --- | --- | --- | --- | --- |
| constructor | -   | (LinkedList) | Create a class to represent a linked list. When created, a linked list should have \*no\* head node associated with it. The LinkedList instance will have one property, 'head', which is a reference to the first node of the linked list. By default 'head' should be 'null'. | const list = new LinkedList();<br>            list.head // null |
| insertFirst | (data) | -   | Creates a new Node from argument 'data' and assigns the resulting node to the 'head' property. Make sure to handle the case in which the linked list already has a node assigned to the 'head' property. | const list = new LinkedList();<br>            list.insertFirst('Hi There'); // List has one node |
| size | -   | (integer) | Returns the number of nodes in the linked list. | const list = new LinkedList();<br>            list.insertFirst('a');<br>            list.insertFirst('b');<br>            list.insertFirst('c');<br>            list.size(); // returns 3 |
| getFirst | -   | (Node) | Returns the first node of the linked list. | const list = new LinkedList();<br>            list.insertFirst('a');<br>            list.insertFirst('b');<br>            list.getFirst(); // returns Node instance with data 'a' |
| getLast | -   | (Node) | Returns the last node of the linked list | const list = new LinkedList();<br>            list.insertFirst('a');<br>            list.insertFirst('b');<br>            list.getLast(); // returns node with data 'a' |
| clear | -   | -   | Empties the linked list of any nodes. | const list = new LinkedList();<br>            list.insertFirst('a');<br>            list.insertFirst('b');<br>            list.clear();<br>            list.size(); // returns 0 |
| removeFirst | -   | -   | Removes only the first node of the linked list. The list's head should now be the second element. | const list = new LinkedList();<br>            list.insertFirst('a');<br>            list.insertFirst('b');<br>            list.removeFirst();<br>            list.getFirst(); // returns node with data 'a' |
| removeLast | -   | -   | Removes the last node of the chain | const list = new LinkedList();<br>            list.insertFirst('a');<br>            list.insertFirst('b');<br>            list.removeLast();<br>            list.size(); // returns 1<br>            list.getLast(); // returns node with data of 'b' |
| insertLast | (Data) | -   | Inserts a new node with provided data at the end of the chain | const list = new LinkedList();<br>            list.insertFirst('a');<br>            list.insertFirst('b');<br>            list.insertLast('c');<br>            list.getLast(); // returns node with data 'C' |
| getAt | (integer) | (Node) | Returns the node at the provided index | const list = new List();<br>            list.insertFirst('a');<br>            list.insertFirst('b');<br>            list.insertFirst('c');<br>            list.getAt(1); // returns node with data 'b' |
| removeAt | (integer) | -   | Removes node at the provided index | const list = new List();<br>            list.insertFirst('a');<br>            list.insertFirst('b');<br>            list.insertFirst('c');<br>            list.removeAt(1);<br>            list.getAt(1); // returns node with data 'a' |
| insertAt | (Data, integer) | -   | Create an insert a new node at provided index. If index is out of bounds, add the node to the end of the list. | const list = new List();<br>            list.insertFirst('a');<br>            list.insertFirst('b');<br>            list.insertFirst('c');<br>            list.insertAt('Hi', 1)<br>            list.getAt(1); // returns node with data 'Hi' |
| forEach | (function) | -   | Calls the provided function with every node of the chain | const list = new List();<br><br>            list.insertLast(1);<br>            list.insertLast(2);<br>            list.insertLast(3);<br>            list.insertLast(4);<br><br>            list.forEach(node => {<br>              node.data += 10;<br>            });<br>            list.getAt(0); // Returns node with data '11' |
| for...of Loop | -   | -   | Linked list should be compatible as the subject of a 'for...of' loop | const list = new List();<br><br>            list.insertLast(1);<br>            list.insertLast(2);<br>            list.insertLast(3);<br>            list.insertLast(4);<br><br>            for (let node of list) {<br>              node.data += 10;<br>            }<br><br>            node.getAt(1); // returns node with data 11 |