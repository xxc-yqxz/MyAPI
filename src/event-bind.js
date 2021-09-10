function addEventListener(el, type, callback, selector) {
    // 判断 el 的类型
    if (typeof el === 'string') {
        el = document.querySelector('el');
    }
    // 事件绑定
    // 如果传了selector，则给selector绑定事件。否则给el绑定事件
    if (!selector) {
        el.addEventListener(type, callback);
    } else {
        el.addEventListener(type, function (e) {
            // 获取点击的目标的事件源
            const target = e.target;
            // 判断target与selector是否匹配
            if (target.matches(selector)) {
                // 若符合，则调用回调
                fn.call(target, e);
            }
        })
    }
}