class MaxHeap {
    constructor(){
        this.values = [];
    }

    getLeftchild(i) {
        return (2*i) + 1;
    }
    getRightChild(i) {
        return (2*i) + 2;
    }
    getParent(i) {
        return Math.floor((i-1)/2);
    }

    insert(val){
       let childIndex = this.values.length;
       this.values[childIndex] = val;
       let parentIndex = this.getParent(childIndex);
       while(this.values[parentIndex] < this.values[childIndex]) {
        let temp = this.values[parentIndex];
        this.values[parentIndex] = this.values[childIndex];
        this.values[childIndex] = temp;
        childIndex = parentIndex;
        parentIndex = this.getParent(childIndex);
       }
    }
}

const mh =  new MaxHeap();
// mh.insert(5);
// mh.insert(23);
// mh.insert(17);
// mh.insert(34);
// mh.insert(53);
// mh.insert(9);
// mh.insert(100);

mh.insert(41);
mh.insert(39);
mh.insert(33);
mh.insert(18);
mh.insert(27);
mh.insert(12);
mh.insert(55);

console.log(mh);
