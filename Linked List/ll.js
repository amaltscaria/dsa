class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        
    }
}

class LL {
    constructor() {
        this.head = null;
        this.last = null;
    }

    insertAtBeginning(val) {
        const node = new Node(val);
    if(!this.head) {this.head = node;this.last = node}
        else {
            node.next = this.head;
            this.head = node;
        }
    }
    insertAtEnd(val) {
        //2options 1=> maintain a rear pointer 2=> traverse and find rear
        const node = new Node(val);
        // this.last.next = node;
        // this.last = node;
        if(!this.head){
            this.head = node;
            this.last = node;
        }
        else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
            this.last = node;
        }
    }
    insertAtPosition(pos, val) {
        const node = new Node(val);
        if(!this.head && pos!==1) return 'Invalid positon as the ll is empty';
        if(pos===1) {this.insertAtBeginning(val);return;}
        let current = this.head;
        let prev = null;
        while(pos>1){
            prev = current;
            current = current.next;
            pos--;
            if(!current && pos>1) return 'Invalid positon';
        }
        prev.next = node;
        node.next = current;
        if(!current) this.last = node;
        return node;                                                                         
    }

    removeFromFront() {
        if(!this.head) return 'underflow';
        const removed = this.head;
        if(!removed.next) {
            this.head = null;
            this.last = null;
        }else {
            this.head = this.head.next;
        }
        return removed;
    }
    removeFromtBack() {
        if(!this.head) return 'underflow';
        const removed = this.head;
        if(!removed.next) {
            this.head = null;
            this.last = null;
        } else {
            let current = this.head;
            while(current.next.next) {
                current = current.next;
            }
            current.next = null;
            this.last = current;
        }
    }
    removeFromAPos(pos) {
        if(!this.head) return 'underflow';
        let current = this.head;
        if(!current.next && pos!==1) return 'Invalid pos';
        if(pos===1) {this.removeFromFront();return;}
        let prev = null;
        let next = current.next;
        while(pos>1) {
            prev = current;
            current = current.next;
            next = current.next;
            pos--;
            if(!current && pos>0) return 'Invalid';
        }
        prev.next = next;
    }
    removeSpecifiedVal(val) {
        
    }
}

const ll = new LL();
ll.insertAtBeginning(34);
ll.insertAtBeginning(3);
ll.insertAtBeginning(27);
ll.insertAtEnd(1000);
console.log(ll.insertAtPosition(1,45));
// ll.removeFromFront()
// ll.removeFromFront()
console.log(ll.removeFromtBack());
// ll.removeFromtBack();
// ll.removeFromtBack();
console.log(ll);
console.log(ll.removeFromAPos(2), 'remv');
console.log(ll);