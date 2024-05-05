class MaxHeap {
    constructor() {
        this.values = [];
    }
    getLeftChild(i) {
        return (i*2) + 1;
    }
    getRightChilde(i) {
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
        this.values[this.values.length] = val;
        // Now bubble up so that it reaches the right place
        this.bubbleUp();
    }
    bubbleUp(){
        let i = this.values.length -1 ;
        while(this.values[i] > this.values[this.getParent(i)] && i>0){
            this.swap(i, this.getParent(i));
            i = this.getParent(i);
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