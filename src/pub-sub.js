const PubSub = {
    // 订阅唯一id
    id: 1,
    // 频道与回调保存容器
    callbacks: {
        // pay: {
        // 此处使用对象的方式存储，是为了能方便删除
        // token_1:fn,
        // token_2:fn2
        // }
    }
}

// 订阅频道
PubSub.subscribe = function (channel, callback) {
    // 创建唯一的编号
    let token = "token_" + this.id++;
    // token_1
    // 判断callbacks属性中是否存在 pay
    if (this.callbacks[channel]) {
        this.callbacks[channel][token] = callback
    } else {
        this.callbacks[channel] = {
            // 注意此处对象内部新增的变量要用[]括起来
            [token]: callback
        }
        // 此种方式，channel因为不存在，所以在其后面使用token，会报错
        // this.callbacks[channel][token] = callback
    }
    // 返回频道订阅的id，以便取消订阅
    return token;
}

// 发布消息
PubSub.publish = function (channel, data) {
    // 获取当前频道中所有的回调
    if (this.callbacks[channel] && this.callbacks[channel] !== {}) {
        Object.values(this.callbacks[channel]).forEach(callback => {
            callback(data);
        });
    } else {
        return;
    }
}

// 取消订阅
/*
  1). 没有传值, flag为undefined
  2). 传入token字符串
  3). msgName字符串
*/
PubSub.unsubscribe = function (flag) {
    // 如果flag为undefiend 则清空所有订阅
    if (flag === undefined) {
        this.callbacks = {};
    } else if (typeof flag === 'string') {
        // 判断是否为 token_ 开头
        if (flag.indexOf('token_') === 0) {
            // 如果是 标明是一个订阅id
            let callBackObj = Object.values(this.callbacks).find(obj => obj.hasOwnProperty(flag))
            delete callBackObj[flag]
        } else {
            // 如果不是 表名是一个频道的名称
            delete this.callbacks[flag];
        }
    }
}