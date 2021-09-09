function debounce(callback, time) {
    // 定时器变量
    let timeId = null;
    // 返回一个函数
    return function (e) {
        // 判断
        if (timeId != null) {
            // 清空定时器
            clearTimeout(timeId)
        }
        // 启动定时器
        timeId = setTimeout(() => {
            // 执行回调
            // 此处使用箭头函数，this指向外层函数的this，及事件源
            callback.call(this, e);
            // 重置定时器变量
            timeId = null
        }, time)
    }
}