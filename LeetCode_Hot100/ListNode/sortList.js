/* 
排序链表
给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
输入：head = [4,2,1,3]
输出：[1,2,3,4]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head || !head.next) return head
    let current = null
    let slow = head
    let fast = head
    while(fast && fast.next){
        current = slow
        slow = slow.next
        fast = fast.next.next
    }
    current.next = null
    const left = sortList(head)
    const right = sortList(slow)
    return merge(left,right)
};

function merge(l1,l2){
    const dummy = new ListNode(-1)
    let current = dummy
    while(l1&&l2){
        if(l1.val>=l2.val){
            current.next = l2
            l2 = l2.next
        }else{
            current.next = l1
            l1 = l1.next
        }
        current = current.next
    }
    current.next = l1||l2
    return dummy.next
}