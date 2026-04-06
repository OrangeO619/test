/* 
从前序与中序遍历序列构造二叉树
给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    function build(preStart,preEnd,inStart,inEnd){
        if (preStart > preEnd || inStart > inEnd) {
            return null;
        }
        const rootVal = preorder[preStart]
        const root = new TreeNode(rootVal)
        const rootIndex = inorder.indexOf(rootVal)
        const leftSize = rootIndex-inStart
        root.left = build(preStart+1,preStart+leftSize,inStart,rootIndex-1)
        root.right = build(preStart+leftSize+1,preEnd,rootIndex+1,inEnd)
        return root
    }
    return build(0,preorder.length-1,0,inorder.length-1)
};