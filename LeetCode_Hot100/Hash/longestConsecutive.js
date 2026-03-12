/* 
128.最长连续序列：
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
示例 1：
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length===0) return 0
    const set = new Set(nums)
    let maxLen = 1
    for(num of set){
        if(!set.has(num-1)){
            let len = 1
            let current = num
            while(set.has(current+1)){
                len++
                current++
            }
            maxLen = Math.max(maxLen,len)
        }
    }
    return maxLen
};