/**
 * Excel表列名称
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 * 例如，
 *  1 -> A
 *  2 -> B
 *  3 -> C
 *  ...
 *  26 -> Z
 *  27 -> AA
 *  28 -> AB
 *  ...
 * 
 * 示例 1: 输入: 1 | 输出: "A"
 * 示例 2: 输入: 28 | 输出: "AB"
 * 示例 3: 输入: 701 | 输出: "ZY"
 * 
 * A-Z: 65-90
 * 
 * @param {number} n
 * @return {string}
 */
const convertToTitle = n => {
    let res = ''
    while (n !== 0) {
        let char = n % 26
        n = Math.floor(n / 26)
        if (char === 0) {
            char = 26
            n--
        }
        res = String.fromCharCode(char + 64) + res
    }
    return res
}

console.log(convertToTitle(18277))