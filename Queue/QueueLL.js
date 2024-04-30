class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(val) {
        const node = new Node(val);
        if(!this.front) {this.front = node;this.rear = node}
        else {
            this.rear.next = node;
            this.rear = node;
        }
    }
    dequeue() {
        if(!this.front) return null;
        const pop = this.front;
    if(!pop.next){this.front = null;this.rear = null}
        else {
            this.front = this.front.next;
        }
        return pop;
    }
    peek() {
        return this.front.val;
    }
    isEmpty() {
        return this.front === null;
    }

    reverse() {
        if(this.front) {
            const pop = this.dequeue();
            this.reverse();
            this.enqueue(pop.val);
        }
    }
}

const queue = new Queue();
queue.enqueue(132);
queue.enqueue(2);
queue.enqueue(55);
queue.enqueue(6);
queue.enqueue(77);
queue.enqueue(44);
queue.dequeue();
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue);
queue.reverse();
console.log(queue);