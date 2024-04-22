class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const preorder = root => {
  if (!root) return;
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
};

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(50);
preorder(root);
