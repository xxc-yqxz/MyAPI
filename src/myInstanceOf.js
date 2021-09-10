// 实现：检查Type的原型对象是否是obj的原型链上的某个对象，如果是返回true
function myInstanceOf(obj, Fn) {
    // 获取函数的显示原型
    let protoType = Fn.prototype;
    // 获取 obj 的隐式原型对象
    let proto = obj.__proto__;
    // 遍历原型链
    while (proto) {
        // 检查原型对象是否相等
        if (protoType === proto) {
            return true
        }
        // 如果不等于
        proto = proto.__proto__;
    }
    return false;
}