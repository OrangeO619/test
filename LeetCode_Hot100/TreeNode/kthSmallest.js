/* 
二叉搜索树中第K小的元素
给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（k 从 1 开始计数）。
输入：root = [3,1,4,null,2], k = 1
输出：1
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    const stack = []
    let count = 0
    let node = root
    while (stack.length||node) {
        while (node) {
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        count++
        if (count === k) {return node.val}
        node = node.right
    }



};