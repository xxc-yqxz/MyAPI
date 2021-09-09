function throttle(callback, wait) {
    // 定义开始时间
    let start = 0;
    console.log(this)   // 此处的this是window对象
    // 返回结果是一个函数
    return function (event) {
        // 获取当前的时间戳
        let now = Date.now();
        // 判断
        if (now - start >= wait) {
            // 若满足条件，则执行回调函数
            // 此处产生闭包，闭包中包含start和callback，当点击事件执行时，此函数内部的this为事件源。故此时可以使用call传入this来改变闭包中callback函数的this。
            callback(this, event);
            // 修改开始时间
            start = now;
        }
    }
}