/* 
删除链表的倒数第N个结点
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
链表中结点的数目为 sz， 1 <= sz <= 30
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let list = new ListNode(-1)
    list.next = head
    let slow = list
    let fast = list
    for(let i=0;i<n;i++){
        fast = fast.next
    }
    while(fast.next){
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    //这里不能返回原头节点，因为可能已被删除
    return list.next
};