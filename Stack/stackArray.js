class Stack {
    constructor() {
        this.stack = [];
    }

    push(val){
        this.stack.push(val);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length-1];
    }

    isEmpty() {
        return this.stack.length===0;
    }

    reverse() {
        let temp1 = [], temp2 = [];
        while(this.stack.length){
            temp1.push(this.stack.pop());
        }
       while(temp1.length) {
        temp2.push(temp1.pop());
       }
       while(temp2.length) {
        this.stack.push(temp2.pop());
       }
        
    }
    insertRecursively(val) {
       if(this.stack.length){
        let pop = this.stack.pop();
        this.stack.push(pop);
       }else {
        this.stack.push(val);
       }
    }
    reverseRecursively() {
        if(this.stack.length){
            let pop = this.stack.pop();
            this.reverseRecursively();
            this.insertRecursively(pop);
        }
    }
}

const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7)
stack.push(8)
console.log(stack.pop());
console.log(stack.isEmpty())
console.log(stack.peek())
console.log(stack.stack);
// stack.reverse();
stack.reverseRecursively();
console.log(stack.stack);
