/**
 * 
 * @param {Array} arr 
 * @returns Array
 */
function unique(arr) {
    // 声明一个空数组
    const result = [];
    // 遍历原始数组
    arr.forEach(item => {
        // 检测result数组中是否包含这个元素
        // 此处为何不用find或findIndex? 这两个API主要用于查找满足一定条件的数，而要查询某个具体的数，应该用IndexOf
        if (result.indexOf(item) === -1) {
            // 若没有该元素，则插入到数组中
            result.push(item)
        }
    });
    return result;
}

/**
 *  
 * @param {Array} arr 
 */
function unique2(arr) {
    // 声明空数组
    const result = []
    // 声明空对象
    const obj = {};
    // 遍历数组
    arr.forEach(item => {
        // 将item作为下标存储在 obj 中
        if (!obj[item]) {
            obj[item] = true;
            result.push(item)
        }
    })
    return result;
}

/**
 * 
 * @param {Array} arr 
 */
function unique3(arr) {
    // // 将数组转化为集合Set
    // let set = new Set(arr);
    // // 将set展开创建一个数组
    // let array = [...set];    // 此处Set结构为具有 Iterator 接口的对象，所以可以使用扩展运算符
    // return array;
    return [...new Set(arr)];
}