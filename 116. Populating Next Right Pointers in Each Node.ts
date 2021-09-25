/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    cNodes(root,null);
    return root;
};

let cNodes = (root,r) => {
    if(root == null || root.left == null) return;
    
    root.left.next = root.right;
    if(r != null){
        root.right.next = r.left;
        cNodes(root.right,r.left);
    }else{
        cNodes(root.right, null);
    }
    cNodes(root.left,root.right);
    
}
