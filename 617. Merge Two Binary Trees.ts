/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    
    let real = new TreeNode();
    if( root1 == null && root2 == null) return null;
    mergeNode(real,root1,root2);
    return real;

};

let mergeNode = (realNode, node1, node2) => {
    
    
    if(node1 == null && node2 == null) {
        realNode = null;
        return;
    }
    
    
    
    if( node1 == null) {
        realNode.val = node2.val;
        if(node2.left != null){
            realNode.left = new TreeNode();
            mergeNode(realNode.left, null,node2.left);    
        }
        if(node2.right != null ){
            realNode.right = new TreeNode();
            mergeNode(realNode.right, null,node2.right);    
        }
        
        
        
    }else if(node2 == null){
        realNode.val = node1.val;
        if(node1.left != null){
            realNode.left = new TreeNode();
            mergeNode(realNode.left,node1.left,null);  
        }
        if(node1.right != null ){
            realNode.right = new TreeNode();
            mergeNode(realNode.right,node1.right,null);
        }
        
    }else{
        realNode.val = node1.val + node2.val;
        if(node1.left != null || node2.left != null){
            realNode.left = new TreeNode();
            mergeNode(realNode.left,node1.left,node2.left);
        }
        if(node1.right != null || node2.right != null) {
            realNode.right = new TreeNode();
            mergeNode(realNode.right,node1.right,node2.right);
        }
    }
}
