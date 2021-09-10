/**
 * 
 * @param {Array} arr 
 * @param {Number} size 
 */
function drop(arr, size) {
    // 过滤原数组，产生新数组
    // return arr.filter((value, index) => {
    //     // 
    //     return index >= size;
    // })

    return arr.filter((value, index) => index >= size)
}

function dropRight(arr, size) {
    return arr.filter((value, index) => {
        return index < (arr.length - size)
    })
}