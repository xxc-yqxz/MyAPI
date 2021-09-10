function call(Fn, obj, ...args) {
    // 判断
    if (obj === undefined || obj === null) {
        obj = globalThis;// 全局对象，nodejs下全局对象不是window，而是global
    }
    // 为obj对象添加临时的方法
    obj.temp = Fn;
    // 调用temp方法
    let result = obj.temp(...args); // 此时因为temp是由obj调用的，所以内部的this就是temp。
    // 删除temp方法
    delete obj.temp;
    return result;
}
