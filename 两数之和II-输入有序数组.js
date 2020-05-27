/**
 * 两数之和 II - 输入有序数组
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * 说明:
 * 返回的下标值（index1 和 index2）不是从零开始的。
 * 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 * 示例:
 * 输入: numbers = [2, 7, 11, 15], target = 9 | 输出: [1,2]
 * 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// const twoSum = (numbers, target) => {
//     let obj = {}
//     for (let i = 0; i < numbers.length; i++) {
//         let num = numbers[i]
//         if (num in obj) {
//             return [obj[num], i + 1]
//         } else {
//             obj[target - num] = i + 1
//         }
//     }
// }
const twoSum = (numbers, target) => {
    let left = 0
    let right = numbers.length - 1
    let sum = numbers[left] + numbers[right]
    while (sum !== target) {
        if (sum > target) {
            right --
        }
        if (sum < target) {
            left ++
        }
        sum = numbers[left] + numbers[right]
    }
    return [left + 1, right + 1]
}

console.log(twoSum([1, 2, 3, 4, 7, 11, 15], 9))