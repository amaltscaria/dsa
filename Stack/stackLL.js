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
    if (!this.rear) {
      this.front = this.rear = node;
    } else {
      node.next = this.rear;
      this.rear = node;
    }
  }

  pop() {
    if (!this.rear) {
      return 'Stack Underflow';
    } else {
      const rear = this.rear;
      if (!rear.next) {
        this.front = null;
        this.rear = null;
      } else {
        this.rear = this.rear.next;
      }
      return rear;
    }
  }

  peek() {
    return this.rear.val;
  }

  isEmpty() {
    return this.rear === null;
  }

  reverseNormal() {
    const list = new Stack();
    const list1 = new Stack();
    while (this.rear) {
      list.insert(this.pop().val);
    }
    while (list.rear) {
      list1.insert(list.pop().val);
    }
    while (list1.rear) {
      this.insert(list1.pop().val);
    }
  }
  insertAtBottom(val) {
    if (!this.rear) this.insert(val);
    else {
      const pop = this.pop().val;
      this.insertAtBottom(val);
      this.insert(pop);
    }
  }

  reverseRecursively() {
    if (this.rear) {
      const val = this.pop().val;
      this.reverseRecursively();
      this.insertAtBottom(val);
    }
  }
  mid() {
    let count = 0;
    let temp = new Stack();
    while (this.rear) {
      temp.insert(this.pop().val);
      count++;
    }
    let mid = count % 2 === 0 ? count / 2 : (count + 1) / 2;
    while (temp.rear) {
      const pop = temp.pop().val;
      if (count !== mid) this.insert(pop)
      count--;
    }
  }

  removeDuplicates() {

  }

  sort() {

  }

  balanceParanthesis() {
    
  }

  countStack() {
    let count = 0;
    const list = new Stack();
    while (this.rear) {
      list.insert(this.pop());
      count++;
    }
    while (list.rear) {
      this.insert(list.pop());
    }
    return count;
  }
  maxMin() {}
  maxMinOn() {}
}

const stack = new Stack();

stack.insert(10);
stack.insert(20);
stack.insert(30);
stack.insert(40);
stack.insert(50);
stack.insert(60);
stack.insert(70);
console.log(stack.mid(), 'mid');
console.log(stack.pop().val);
console.log(stack.pop().val);
console.log(stack.pop().val);
console.log(stack.pop().val);
// console.log(stack.pop().val);
// console.log(stack.pop().val);
// console.log(stack.pop().val);

// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack);
// stack.reverseRecursively();
// console.log(stack);
// stack.reverseNormal();
console.log(stack);
// console.log(stack.mid(), 'mid');
// console.log(stack.countStack());
// console.log(stack.mid(), 'mid');

console.log(stack);
