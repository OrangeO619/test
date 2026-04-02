/* 
对称二叉树
给你一个二叉树的根节点 root ， 检查它是否轴对称。
输入：root = [1,2,2,3,4,4,3]
输出：true
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true
    return isMirror(root.left,root.right)
};
function isMirror(left,right){
        if(!left && !right){
            return true
        }
        if(!left ||!right){
            return false
        }
        if(left.val!==right.val){
            return false
        }
        return isMirror(left.left,right.right)&&isMirror(left.right,right.left)
    }