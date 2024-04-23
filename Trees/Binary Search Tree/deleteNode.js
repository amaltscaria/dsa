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
    delete(val) {
        if(!this.root) return null;
       this.deleteNode(this.root, val);
    }
    deleteNode(root, val){
        if(!root) return null;
        if(val < root.val){
           root.left = this.deleteNode(root.left, val);
        }else if (val > root.val) {
           root.right = this.deleteNode(root.right , val);
        }else {
            if(!root.left){
                return root.right;
            }
            if(!root.right){
                return root.left;
            }
            const succ = this.successor(root.right);
            root.val = succ.val;
            this.deleteNode(root.right, succ.val);

        }
        return root;
    }
    successor(curr){
        while(curr.left){
            curr = curr.left;
        }
        return curr;
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
// bst.insert(10);
bst.insert(69);
bst.insert(18);
bst.insert(40);
bst.insert(22);
bst.insert(24);
bst.insert(20);

bst.delete(19)

console.log(bst);









