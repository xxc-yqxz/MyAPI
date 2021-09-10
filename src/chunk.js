/**
 * 
 * @param {Array} arr 
 * @param {Number} size 
 */
function chunk(arr, size = 1) {
    // 判断
    if (arr.length === 0) {
        return []
    }
    // 声明两个变量
    let result = [];
    let tmp = [];   // [1,2,3]
    // 遍历
    arr.forEach(item => {
        // 判断tmp元素的长度是否为0
        if (tmp.length === 0) {
            // 将 tmp 压入到result中
            // 个人理解：此处通过push添加一个数组后，result中的第一个值和tmp指向同一个堆空间地址，当tmp=[]时，tmp被赋予了新地址，而result中的值仍指向原本的地址。
            result.push(tmp);
        }
        // 将元素压入到临时数组temp中
        tmp.push(item)
        // 判断
        if (tmp.length === size) {
            tmp = [];
        }
    })
    return result;
}