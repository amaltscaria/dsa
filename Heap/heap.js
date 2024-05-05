class MaxHeap {
    constructor() {
        this.values = [];
    }
    getLeftChild(i) {
        return (i*2) + 1;
    }
    getRightChild(i) {
        return (i*2) + 2;
    }
    getParent(i) {
        return Math.floor((i-1)/2);
    }
    swap(i,j){
        [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
    }
    insert(val) {
        // First Insert the val to the end of the heap
        this.values.push(val);
        // Now bubble up so that it reaches the right place
        this.bubbleUp();
    }
    bubbleUp(){
        let i = this.values.length -1 ;
        let parentIndex = this.getParent(i);
        while(i > 0 && this.values[i] > this.values[parentIndex]){
            this.swap(i, this.getParent(i));
            i = this.getParent(i);
            parentIndex = this.getParent(i);
        }
    }
    extractMaxIteratively() {
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.bubbleDownIterative();
        }
        return max;

    }
    extractMaxRecursively() {
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
        let largest = this.values[i];
        let leftChildIndex = this.getLeftChild(i);
        let rightChildIndex = this.getRightChild(i);
        let leftChild, rightChild;
        let swap = null;
        if(leftChildIndex < length){
            leftChild = this.values[leftChildIndex];
            if(leftChild > largest){
                swap = leftChildIndex;
            }
        }
        if(rightChildIndex < length) {
            rightChild = this.values[rightChildIndex];
            if((!swap && rightChild > largest) || (swap && rightChild > leftChild)){
                swap = rightChildIndex;
            }
        }
        if(swap){
            this.swap(i, swap);
            this.bubbleDownRecursively(swap);
        }
       
    }
    bubbleDownIterative() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap  = null;
            if(leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if(leftChild > element){
                    swap = leftChildIndex;
                }
            }
            if(rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if((!swap && rightChild > element) || (swap && rightChild > leftChild)){
                    swap = rightChildIndex;
                }
            }
            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }

}


const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(34);
maxHeap.insert(20);
maxHeap.insert(64);
maxHeap.insert(5);
maxHeap.insert(2);
maxHeap.insert(1);

console.log(maxHeap);
console.log(maxHeap.extractMaxRecursively());
console.log(maxHeap.extractMaxIteratively());
console.log(maxHeap);