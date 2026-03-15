/* 
给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
子数组是数组中元素的连续非空序列。

示例 1：

输入：nums = [1,1,1], k = 2
输出：2
示例 2：

输入：nums = [1,2,3], k = 3
输出：2
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let res = 0
    let prefixSum = 0
    const map = new Map()
    map.set(0,1)
    for(let i=0;i<nums.length;i++){
        prefixSum += nums[i]
        if(map.has(prefixSum-k)){
            res+=map.get(prefixSum-k)
        }
        map.set(prefixSum,(map.get(prefixSum)||0)+1)
    }
    return res
};