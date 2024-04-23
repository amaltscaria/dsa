class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(val) {
        const node = new Node(val);
        if(!this.root) {
            this.root = node;
        }else {
            this.insertIntoBST(this.root, node);
        }
    }
    insertIntoBST(root, node){
        if(node.val < root.val) {
            if(!root.left){
                root.left = node;
                return this;
            }
            this.insertIntoBST(root.left, node);
        }else if(node.val > root.val) {
            if(!root.right){
                root.right = node;
                return this;
            }
            this.insertIntoBST(root.right, node);
        }else return root;
    }
    //equal value or Closest smaller value; 
    floor(val) {
        if(!this.root) return null;
        if(this.root.val === val) return val;
        let ans = null;
        let current = this.root;
        while(current){
            if(val < current.val){
                current = current.left;
            }
            else if(val > current.val) {
                ans = current.val;
                current = current.right;
            }
            else if(val === current.val){
                return current.val;
            }
        }
        return ans;
    }
}

const bst = new BST();   

bst.insert(30);
bst.insert(15);
bst.insert(45);
bst.insert(19);
bst.insert(10);
bst.insert(69);
bst.insert(18);
bst.insert(40);
bst.insert(22);
bst.insert(24);
bst.insert(20);

console.log(bst.floor(31));


// console.log(bst);









