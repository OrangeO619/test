/* 
相交链表
给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA||!headB) return null
    let pA = headA
    let pB = headB
    while(pA!==pB){
        pA=pA? pA.next : headB
        pB=pB? pB.next : headA
    }
    return pA
};