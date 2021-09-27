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

function reverseList(head: ListNode | null): ListNode | null {
    
    if(head == null) return null;
    if(head.next == null) return head;
    
    if(head.next.next == null){
        let tmp = head.next;
        head.next = null;
        tmp.next = head;
        return tmp;
    }
    
    let base = head.next;
    head.next = null;
    
    while(base.next != null){
        let tmp = base.next;
        base.next = head;
        head = base;
        base = tmp;
    }
    base.next = head;
    return base;

};
