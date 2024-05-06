class Node {
    constructor(val , priority) {
        this.val = val;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    getParent(i) {
        return Math.floor((i-1)/2);
    }
    getLeftChild(i) {
        return i * 2 + 1;
    }
    getRightChild(i) {
        return i * 2 + 2;
    }
    swap(i,j) {
        [this.values[i],this.values[j]] = [this.values[j], this.values[i]]
    }
    enqueue(value, priority){
        const node = new Node(value, priority);
        this.values.push(node);
        if(this.values.length>1)
        this.bubbleUp();
    }
    bubbleUp() {
        let i = this.values.length -1 ;
        let parentIndex = this.getParent(i);
        while(i > 0 && this.values[i].priority < this.values[parentIndex].priority){
            this.swap(i, this.getParent(i));
            i = this.getParent(i);
            parentIndex = this.getParent(i);
        }
        
    }
    dequeue() {
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            let index = 0, length = this.values.length;
            this.values[0] = end;
            this.bubbleDownRecursively(index , length);
        }
        return max;

    }
    bubbleDownRecursively(i, length) {
        let largest = this.values[i].priority;
        let leftChildIndex = this.getLeftChild(i);
        let rightChildIndex = this.getRightChild(i);
        let leftChildPriority, rightChildPriority;
        let swap = null;
        if(leftChildIndex < length){
            leftChildPriority = this.values[leftChildIndex].priority;
            if(leftChildPriority < largest){
                swap = leftChildIndex;
            }
        }
        if(rightChildIndex < length) {
            rightChildPriority = this.values[rightChildIndex].priority;
            if((!swap && rightChildPriority < largest) || (swap && rightChildPriority < leftChildPriority)){
                swap = rightChildIndex;
            }
        }
        if(swap){
            this.swap(i, swap);
            this.bubbleDownRecursively(swap);
        }
       
    }
}


const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(10,3);
priorityQueue.enqueue(23,10);
priorityQueue.enqueue(2,8);
priorityQueue.enqueue(3,5);
priorityQueue.enqueue(33,1);
priorityQueue.enqueue(45,2);
priorityQueue.enqueue(13,6);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());

console.log(priorityQueue);