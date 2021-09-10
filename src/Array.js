function map(arr, callback) {
    // 声明空数组
    let result = [];
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        // 执行回调
        result.push(callback(arr[i], i));
    }
    // 返回结果
    return result
}

/**
 * 
 * @param {Array} arr 
 * @param {function} callback 
 * @param {*} initValue 
 * @returns *
 */
function reduce(arr, callback, initValue) {
    // 声明变量
    let result = initValue
    for (let i = 0; i < arr.length; i++) {
        // 执行回调
        result = callback(result, arr[i])
    }
    return result
}

/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * @returns 
 */
function filter(arr, callback) {
    // 声明空数组
    let result = [];
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i)) {
            result.push(arr[i])
        }
    }
    return result
}

/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 */
function find(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i)) {
            return arr[i];
        }
    }
    // 如果没有遇到满足条件的，返回undefined;
    return undefined
}

/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * @returns 
 */
function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i)) {
            return i;
        }
    }
    // 如果没有遇到满足条件的，返回-1;
    return -1
}

/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * @returns 
 */
function every(arr, callback) {
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        // 执行回调,如果回调执行返回结果为false
        if (!callback(arr[i], i)) {
            return false;
        }
    }
    // 如果都满足条件 则返回true
    return true;
}

/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * @returns 
 */
function some(arr, callback) {
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        // 执行回调,如果回调执行返回结果为false
        if (callback(arr[i], i)) {
            return true;
        }
    }
    // 如果都满足条件 则返回true
    return false;
}
