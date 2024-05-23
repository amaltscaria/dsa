// Arrays in js are objects with index based keys

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        const lasItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lasItem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
        return item;f
    }
    shiftItems(index){
        for(let i = index; i < this.length; i++){
            this.data[index] = this.data[index+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const arr = new MyArray();
arr.push(5);
arr.push(3);
arr.pop();
console.log(arr);