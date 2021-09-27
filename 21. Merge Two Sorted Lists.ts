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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let base,second;
    if(l1 == null && l2 == null) return null;
    if(l1 == null) return l2;
    if(l2 == null) return l1;
    
    if(l1.val <= l2.val){
        base = l1;
        second = l2;
    }else{
        base = l2;
        second = l1;
    }
    
    let res = base;
    
    while(base.next != null || second != null){
        if(base.next == null){
            base.next = second;
            second = null;
        }else if(second == null){
            base = base.next;
        }else{
            if(base.next.val > second.val){
                let tmp = base.next;
                base.next = second;
                base = base.next;
                second = tmp;
            }else{
                    base = base.next;
            }
        }
    }
    return res;

};
