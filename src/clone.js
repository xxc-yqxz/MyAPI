/**
 * 
 * @param {*} target 
 */
function clone1(target) {
    // 类型判断 {} [] null
    // ES6
    if (typeof target === 'object' && target !== null) {
        // 判断数据是否为数组
        if (Array.isArray(target)) {
            return [...target]
        } else {
            return { ...target }
        }
    } else {
        return target;
    }
}

function clone2(target) {
    // 类型判断
    if (typeof target === 'object' && target !== null) {
        // 创建一个容器
        const result = Array.isArray(target) ? [] : {};
        // 遍历target数据
        // for in 既可遍历对象，也可遍历数组
        for (let key in target) {
            // 判断当前对象身上是否包含改属性,因为for...in会遍历原型上的数据。
            if (target.hasOwnProperty(key)) {
                // 将属性设置到result结果中
                result[key] = target[key];
            }
        }
        return result;
    } else {
        return target
    }
}

function deepClone1(target) {
    // 此种方式的缺点：1.不能克隆方法。2.循环引用出错
    // 通过数据创建 JSON 格式的字符串
    let str = JSON.stringify(target)
    // 将 JSON 字符串创建为JS数据
    let data = JSON.parse(str);
    return data;
}

function deepClone2(target) {
    // 此种方法的缺点：循环引用出错。
    // 检测数据类型
    if (typeof target === 'object' && target !== null) {
        // 创建一个容器
        const result = Array.isArray(target) ? [] : {};
        // 遍历对象
        for (let key in target) {
            // 检测该属性是否为对象本身的属性（不能拷贝原型对象的属性）
            if (target.hasOwnProperty(key)) {
                // 拷贝
                result[key] = deepClone2(target[key]);
            }
        }
        return result;
    } else {
        return target;
    }
}

function deepClone3(target, map = new Map()) {
    // 检测数据类型
    if (typeof target === 'object' && target !== null) {
        // 克隆数据之前，进行判断，数据之前是否克隆过
        // 此处使用map的原因：map可以用对象做键
        let cache = map.get(target);
        if (cache) {
            return cache
        }
        // 创建一个容器
        const result = Array.isArray(target) ? [] : {};
        // 将新的结果存储到容器中。
        map.set(target, result)
        // 遍历对象
        for (let key in target) {
            // 检测该属性是否为对象本身的属性（不能拷贝原型对象的属性）
            if (target.hasOwnProperty(key)) {
                // 拷贝
                result[key] = deepClone3(target[key], map);
            }
        }
        return result;
    } else {
        return target;
    }
}

function deepClone4(target, map = new Map()) {
    if (typeof target === 'object' && target !== null) {
        let cache = map.get(target)
        if (cache) {
            return cache;
        }
        // 判断目标的数据类型
        let isArray = Array.isArray(target)
        let result = isArray ? [] : {};
        // 此处的result存储的是？target的值。
        map.set(target, result);
        if (isArray) {
            target.forEach((item, index) => {
                // 此处，使用result关键是为了得到一个新的对象或数组，若是数组。则使用下标遍历。如b。当result为b时，b[0]='e',b[1]='f',b[2]='g'。若是对象，则使用对象键值遍历。如obj。
                result[index] = deepClone4(item, map)
            })
        } else {
            Object.keys.forEach(key => {
                result[key] = deepClone4(target[key], map)
            })
        }
        return result;
    } else {
        return target
    }
}
