/* 
搜索插入位置
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
示例 1:
输入: nums = [1,3,5,6], target = 5
输出: 2
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left=0
    let right=nums.length-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(target>nums[mid]){
            left=mid+1
        }else if(target<nums[mid]){
            right=mid-1
        }else{
            return mid
        }
    }
    return left
};
