

    // creating a node class 
        class Node{
            constructor(val =0,next=null){
                this.val = val;
                this.next = next;
            }
        }

    // creating a linked list class from this node class
        class linkedList{
            constructor(){
                this.head = null;
            }
            
            addNode(val){
                let newNode = new Node(val)
                if(this.head === null){
                    this.head =  newNode;
                }
                else{
                    newNode.next = this.head;
                    this.head  = newNode
                }
            }

            deleteNode(){
                if (this.head === null) {
                    console.log("List is empty, nothing to delete.");
                    return;
                }
                let temp = this.head;
                this.head = temp.next;
                temp.next = null;
            }

            printNodes(){
                if (this.head === null) {
                    console.log("List is empty, nothing to print.");
                    return;
                }
                let temp = this.head;
                while(temp !== null){
                    console.log(temp.val);
                    temp=temp.next;
                }
            }
        }
        const newLL = new linkedList();
        newLL.addNode(10);
        newLL.addNode(8);
        newLL.addNode(-5);
        newLL.addNode(358);
        newLL.deleteNode()
        newLL.printNodes()

        // implementing a stack class
        class stack{
            constructor(){
                this.top = null;
            }

            push(val){
                let newVal = new Node(val);
                if(this.top === null){
                    this.top  = newVal;
                }
                else{
                    newVal.next = this.top;
                    this.top = newVal;
                }
            }

            pop(){
                if (this.top === null) {
                    console.log("Stack is empty, nothing to pop.");
                    return;
                }

                let temp = this.top;
                this.top = temp.next;
                temp.next = null;
            }

            peep(){
                if (this.top === null) {
                    console.log("Stack is empty, nothing to peek.");
                    return;
                }
                console.log(this.top.val);
            }

            tops(){
                if(this.top === null){
                    return null;
                }
                return this.top.val;
            }

            empty(){
                return this.top === null;
            }
        }

    // reversing a string using the stack class 
        let str = "Reverse this"; 
        const rev = new stack()
        for(let i=0;i<str.length;i++){
            rev.push(str[i]);
        }
        str = "";
        while(!rev.empty()){
            str+= rev.tops();
            rev.pop();
        }
        console.log(str);


    // creating a queue class
        class queue{
            constructor(){
                this.front = null;
                this.rear = null;
            }

            enqueue(val){
                let newNode = new Node(val);
                if(this.rear === null){
                    this.front = this.rear = newNode;
                }
                else{
                        this.rear.next = newNode;
                        this.rear = newNode;
                }
            }

            dequeue(){
                if (this.front === null) {
                    console.log("Queue is empty, nothing to pop.");
                    return;
                }
                let temp = this.front;
                this.front = this.front.next;
                temp.next = null;
            // if the queue becomes empty after pop, make the rear null as well 
                if(this.front === null){
                    this.rear = null;
                }
            }
            frontElem(){
                if(this.front === null){
                    return null;
                }
                return this.front.val;
            }
            empty(){
                return this.front === null;
            }
        }

        const newQueue = new queue();
        newQueue.enqueue(20);
        newQueue.enqueue(35);
        newQueue.enqueue(-4);
        newQueue.enqueue(4594);

        while(!newQueue.empty()){
            console.log(newQueue.frontElem());
            newQueue.dequeue();
        }

        // creating a treeNode class
        class treeNode{
            constructor(val =0,left =null,right =null){
                this.val = val;
                this.left = left;
                this.right = right;
            }
        }

        class BinaryTree{
            constructor(){
                this.root = null;
            }

            insert(value) {
                const newNode = new treeNode(value);
                // if the root node is empty
                if (!this.root) {
                    this.root = newNode;
                    return;
                }

                let current = this.root;
                while (true) {
                    if (value < current.val){
                        if (!current.left) 
                        {
                            current.left = newNode;
                            return;
                        }
                        current = current.left;
                    } 
                    else {
                        if (!current.right) 
                        {
                            current
                            .right = newNode;
                            return;
                        }
                        current = current.right;
                    }
                }
            }
            inorder(node = this.root,result=[]){
                if(node=== null){
                    return result;
                }
                this.inorder(node.left,result);
                result.push(node.val);
                this.inorder(node.right,result);
                return result;
            }
        }

        const bin = new BinaryTree();
        bin.insert(10);
        bin.insert(35);
        bin.insert(5);
        bin.insert(null);
        bin.insert(23);
        bin.insert(5);

        console.log(bin.inorder());