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

    insertIteratively(val) {
        const node = new Node(val);
        if(!this.root) {
            this.root = node;
        }else {
            let current = this.root;
            while(true){
                if(node.val < current.val){
                    if(!current.left){
                        current.left = node;
                        return;
                    }
                    current = current.left;
                }else if(node.val > current.val){
                    if(!current.right){
                        current.right = node;
                        return;
                    }
                    current = current.right;
                }else return current;
            }
        }
    }
}

const bst = new BST();
// bst.insert(30);
// bst.insert(15);
// bst.insert(45);
// bst.insert(19);
// bst.insert(10);
// bst.insert(50);
// bst.insert(69);
// bst.insert(18);

bst.insert(30);
bst.insert(15);
bst.insert(45);
bst.insert(19);
bst.insert(10);
bst.insert(10);
bst.insert(69);
bst.insert(18);

console.log(JSON.stringify(bst));









