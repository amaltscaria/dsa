// Height of the binary tree is conisdered as the number of nodes in its longest path from root to leaft

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const nodes = root => {
    if(!root) return 0;
    return 1 + nodes(root.left) + nodes(root.right);
  }
  
  const root = new Node(10);
  root.left = new Node(20);
  root.right = new Node(30);
  root.right.left = new Node(40);
  root.right.right = new Node(50);
  console.log(nodes(root));
  