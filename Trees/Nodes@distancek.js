//Write a recursive function which takes an argument root of the binary tree and a value k
// the task is to print all the nodes at distance k;

// Height of the binary tree is conisdered as the number of nodes in its longest path from root to leaft

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const nodesAtDistanceK = (root, k) => {
    if(!root) return null;
    if(k==0){
        console.log(root.val)
    }
    else {
        nodesAtDistanceK(root.left, k-1);
        nodesAtDistanceK(root.right, k-1);
        
        

    }
  }
  
  const root = new Node(10);
  root.left = new Node(20);
  root.right = new Node(30);
  root.right.left = new Node(40);
  root.right.right = new Node(50);
  nodesAtDistanceK(root, 1);
  