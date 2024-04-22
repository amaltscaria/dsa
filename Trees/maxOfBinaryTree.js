// Height of the binary tree is conisdered as the number of nodes in its longest path from root to leaft

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  //method 1
//   const max = root => {
//     let max = -Infinity;
//     const helper = root => {
//         if(!root) return;
//         if(root.val>max){max = root.val};
//         helper(root.left);
//         helper(root.right);
//     }
//     helper(root);
//     return max;
//   }

//method2

  const max = root => {
    if(!root) return -Infinity;
    return Math.max(root.val, max(root.left), max(root.right));
  }
  
  const root = new Node(10);
  root.left = new Node(20);
  root.right = new Node(30);
  root.right = new Node(120);
  root.right.left = new Node(40);
  root.right.right = new Node(50);
  console.log(max(root));
  