class Queue {
    constructor() {
        this.queue = [];
    }

    isEmpty() {
        return this.queue.length === 0;
    }
    enqueue(val) {
        this.queue.push(val);
    }
    dequeue() {
        if(!this.queue.length) return 'Queue underflow'
        return this.queue.shift();
    }
    peek() {
        return this.queue[0];
    }

    reverseNormal() {

        const stack = [];
        while(this.queue.length) {
            stack.push(this.dequeue());
        }
        while(stack.length) {
            this.enqueue(stack.pop());
        }

    }
    reverseRecurseive() {
        if(this.queue.length){
            const pop = this.dequeue();
            this.reverseRecurseive();
            this.enqueue(pop);
        }
    }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(23);
queue.enqueue(55);
queue.enqueue(11);
queue.enqueue(35);
queue.enqueue(99);
console.log(queue.dequeue())
console.log(queue);
console.log(queue.peek());
console.log(queue.isEmpty());
queue.reverseNormal();
console.log(queue);
queue.reverseRecurseive();
console.log(queue);