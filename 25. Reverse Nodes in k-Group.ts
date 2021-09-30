/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if(k == 1) return head;

    let count = 1;
    let res = null;
    
    let tmpHead = head;
    let bugs = null;
    
    while( head != null){
        // console.log("res: ",res);
        if( count == 1){
            tmpHead = head;
            // console.log("tmpHead: ",tmpHead);
            head = head.next;
            count++;
        }else if( count == k){
            if( res == null) res = head;
            let tmp = head.next;
            revList( head.next, tmpHead, head);
            if( bugs != null) bugs.next = head;
            bugs = tmpHead;
            count = 1;
            head = tmp;
            // console.log(head);
        } else{
            head = head.next;
            count++; 
        }
        
    }
    
    return res == null ? tmpHead : res;
    
};

function revList(nodeToPoint, currentNode, dest) {
    // console.log(nodeToPoint,dest);
    
    if(nodeToPoint == dest) return nodeToPoint;
    
    let tmp = currentNode.next;
    
    currentNode.next = nodeToPoint;
    
    revList(currentNode, tmp, dest);
    
}
