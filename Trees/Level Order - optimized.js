// Height of the binary tree is conisdered as the number of nodes in its longest path from root to leaft

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  //method 1;
//   const levelorder = root => {
//     if(!root) return null;
//     let ans = '';
//     const queue = [];
//     queue.unshift(root);
//     queue.unshift(null);
//     while(queue.length>1){
//         const x = queue.pop();
//         if(x===null){
//             ans+= '\n';
//             queue.unshift(null);
//         }else  {
//             ans+= x.val + ' ';
//             if(x.left)queue.unshift(x.left);
//             if(x.right)queue.unshift(x.right);
//         }
      
        
//     }
//     return ans;
//   }
  
// method 2;
  const levelorder = root => {
    let ans = '';
    if(!root) return null;
    const queue = [];
    queue.unshift(root);
    while(queue.length){
        let x = queue.length ;
        for(let i = 0; i < x; i++){
            const y = queue.pop();
            ans+= y.val + ' ';
            if(y.left)queue.unshift(y.left);
            if(y.right)queue.unshift(y.right);
        }
        ans+='\n';
    }
    console.log(ans);

  }
  const root = new Node(10);
  root.left = new Node(20);
  root.right = new Node(30);
  root.left.left = new Node(70);
  root.right.left = new Node(40);
  root.right.right = new Node(50);
  levelorder(root);
  