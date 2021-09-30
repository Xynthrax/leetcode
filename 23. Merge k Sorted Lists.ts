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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    
    let itNode;
    let res = null;
    
    while(true){
        let minNode = new ListNode(10001);
        let nodeToAscend;
        
        lists.forEach( (list,idx) => {
            if( list != null){
                if( minNode.val > list.val ) {
                    minNode = list;
                    nodeToAscend = idx;
                }
            }
            
        });
        if( minNode.val == 10001) break;
        if(itNode == null) {
            // console.log(minNode);
            itNode = minNode;
            res = itNode;
        }else{
            itNode.next = minNode;
            itNode = itNode.next;
        }
        // console.log(res);
        lists[nodeToAscend] = lists[nodeToAscend].next;   
    }
    
    return res;

};
