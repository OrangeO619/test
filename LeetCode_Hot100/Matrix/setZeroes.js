
/* 
矩阵置零
给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。 
输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
输出：[[1,0,1],[0,0,0],[1,0,1]]
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m=matrix[0].length//列
    const n=matrix.length//行
    let firstRowHasZero = false
    let firstColHasZero = false
    for(let j=0;j<m;j++){
        if(matrix[0][j]===0){
            firstRowHasZero = true
            break
        }
    }
    for(let i=0;i<n;i++){
        if(matrix[i][0]===0){
            firstColHasZero = true
            break
        }
    }
    for(let i=1;i<n;i++){
        for(let j=1;j<m;j++){
            if(matrix[i][j]===0){
                matrix[i][0]=0
                matrix[0][j]=0
            }
        }
    }
    for(let i=1;i<n;i++){
        for(let j=1;j<m;j++){
            if(matrix[i][0]===0||matrix[0][j]===0){
                matrix[i][j]=0
            }
        }
    }
    if(firstColHasZero){
        for(let i=0;i<n;i++){
            matrix[i][0]=0
        }
    }
    if(firstRowHasZero){
        for(let j=0;j<m;j++){
            matrix[0][j]=0
        }
    }
};