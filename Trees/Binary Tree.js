 class TreeNode {
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

    insertIteratively(val) {
        const node = new TreeNode(val);
        if(!this.root) {
            this.root = node;
            return;
        } 
        let current = this.root;
        while(true){
            if(current.val > node.val){
                if(!current.left){current.left = node;return}
                else current = current.left;
            }else {
                if(!current.right){current.right = node; return;}
                current = current.right;
            }
        }
    }

    insert(val) {
        const node = new TreeNode(val);
        if(!this.root) {
            this.root = node;
        } else {
            this.insertIntoBst(this.root, node);
        }
    }

    insertIntoBst(root, node) {
        if(node.val<root.val){
            if(!root.left){
                root.left = node;
                return;
            }
            this.insertIntoBst(root.left, node);
        }else {
            if(!root.right){
                root.right = node;
                return;
            }
            this.insertIntoBst(root.right, node);
        }
    }

    search(root, val) {
        if(!root) return false;
        if(root.val === val) return true;
        if(val < root.val){
            return this.search(root.left, val);
        }else {
            return this.search(root.right, val);
        }
    }

    searchIteratively(root, val) {
        let current = root;
        while(true){
        if(!current) return false;
        if(current.val===val) return true;
        if(current.val > val)current = current.left;
        else current = current.right;
        }
    }

    remove(val) {

    }
}

   const traverse = node => {
    const tree = {value: node.val};
    tree.left = node.left === null? null: traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}           
 const bst = new BST();
 bst.insertIteratively(9);
 bst.insertIteratively(4);
 bst.insertIteratively(6);
 bst.insertIteratively(20);
 bst.insertIteratively(170);
 bst.insertIteratively(15);
 bst.insertIteratively(1);
 console.log(bst.searchIteratively(bst.root, 9));
 console.log(bst);
// console.log(JSON.stringify(traverse(bst.root)));

