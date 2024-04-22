class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const postorder = root => {
    if (!root) return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
  };
  
  const root = new Node(10);
  root.left = new Node(20);
  root.right = new Node(30);
  root.right.left = new Node(40);
  root.right.right = new Node(50);
  postorder(root);
  