/* 
回文链表
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const arr = []
    let p = head
    while(p){
        arr.push(p.val)
        p = p.next
    }
    let left = 0
    let right = arr.length-1
    while(left<right){
        if(arr[left]!==arr[right]){ return false } 
        left++
        right--
    }
    return true
};