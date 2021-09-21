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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    let L = head;
    let LP = null;
    let R = head;
    let count = 1;
    
    while(true){
        if(R.next == null){
            if(!LP){
                head = head.next;
                break;
            }
            LP.next = L.next;
            break;
        }
        R = R.next;
        count++;
        if(count > n) {
            LP = L;
            L = L.next;
        }
    }
    return head;
};
