/**
 * 声明空数组
 * @param {Array} arr 
 */
function flatten1(arr) {
    // 声明空数组
    let result = [];
    // 遍历数组
    arr.forEach(item => {
        // 判断
        if (Array.isArray(item)) {
            // result.push(...flatten1(item))
            result = result.concat(flatten1(item))
        } else {
            // result.push(item)
            result = result.concat(item)
        }
    })
    return result;
}

/**
 * 
 * @param {Array} arr 
 */
function flatten2(arr) {
    // 声明数组
    let result = [...arr];

    // 循环判断
    while (result.some((item) => Array.isArray(item))) {
        // [1,2,[3,4,[5,6]],7]
        result = [].concat(...result);  //[1,2,3,4,[5,6],7]
    }
    return result;
}