class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    insert(val) {
        const node = new Node(val);
        if(!this.rear){
            this.front = this.rear = node;
        }else {
            node.next = this.rear;
            this.rear = node;
        }
    }

    pop() {
        if(!this.rear){
            return 'Stack Underflow';
        }else {
            const rear = this.rear;
            this.rear = this.rear.next;
            return rear;
        }
    }

    peek(){

    }

    isEmpty() {

    }
}

const stack =  new Stack();

stack.insert(10);
stack.insert(20);
stack.insert(30);
stack.insert(40);
stack.insert(50);
stack.insert(60);
stack.insert(70);
stack.pop();
console.log(stack);