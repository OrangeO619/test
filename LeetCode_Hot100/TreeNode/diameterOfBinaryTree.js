/* 
二叉树的直径
给你一棵二叉树的根节点，返回该树的 直径 。
二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。
两节点之间路径的 长度 由它们之间边数表示。
输入：root = [1,2,3,4,5]
输出：3
解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。
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
 * @return {number}
 */
// 对于每个节点，经过该节点的最长路径 = 左子树深度 + 右子树深度
var diameterOfBinaryTree = function(root) {
    let maxLen = 0
    function maxDepth(node){
        if(!node) return 0
        const leftDepth = maxDepth(node.left)
        const rightDepth = maxDepth(node.right)
        const curLen = leftDepth+rightDepth
        maxLen = Math.max(maxLen,curLen)
        return Math.max(leftDepth,rightDepth)+1
    }
    maxDepth(root)
    return maxLen
};