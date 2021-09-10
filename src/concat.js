/**
 * 
 * @param {Array} arr 
 * @param  {...any} args 
 * @returns 
 */
function concat(arr, ...args) {
    // 声明一个空数组
    const result = [...arr];
    // 遍历数组
    args.forEach(item => {
        // 判断item是否为数组
        if (Array.isArray(item)) {
            result.push(...item);
        } else {
            result.push(item);
        }
    });
    return result;
}

/**
 * 
 * @param {Array} arr 
 * @param {Number} begin 
 * @param {Number} end 
 * @returns 
 */
function slice(arr, begin, end) {
    // 若arr数组长度为0
    if (arr.length === 0) {
        return [];
    }
    // 判断 begin
    begin = begin || 0;
    if (begin > arr.length) {
        return [];
    }

    // 判断 end
    end = end || arr.length;
    if (end < begin) {
        end = arr.length;
    }

    // 声明一个空数组
    const result = [];

    // 遍历对象
    for (let i = 0; i < arr.length; i++) {
        if (i >= begin && i < end) {
            // 将下标对应的元素压入数组
            result.push(arr[i]);
        }
    }

    return result;
}