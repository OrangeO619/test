/* 
螺旋矩阵
给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const res = []
    let top = 0
    let left = 0
    let bottom = matrix.length-1
    let right = matrix[0].length-1
    while(top<=bottom&&left<=right){
        for(let j=left;j<=right;j++){
            res.push(matrix[top][j])
        }
        top++
        for(let i=top;i<=bottom;i++){
            res.push(matrix[i][right])
        }
        right--
        if(top<=bottom){
            for(let j=right;j>=left;j--){
                res.push(matrix[bottom][j])
            }
            bottom--
        }
        if(left<=right){
            for(let i=bottom;i>=top;i--){
                res.push(matrix[i][left])
            }
            left++
        }
        
    }
    return res
};
