function axios({ method, url, params, data }) {
    // 转换一下大写
    method = method.toUpperCase();
    // 返回值
    return new Promise((resolve, reject) => {
        // 四步骤
        // 1.创建对象
        const xhr = new XMLHttpRequest();
        // 2.初始化
        // 处理 params 对象 a=100&b=200
        let str = '';
        for (let k in params) {
            str += `${k}=${params[k]}&`;
        }
        str = str.slice(0, -1);
        // 无论是GET还是post，如果有写url参数，则都应该带上。
        xhr.open(method, url + '?' + str);
        // 3.发送
        if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
            // Content-type json类型设置
            xhr.setRequestHeader('Content-type', 'application/json');
            // 设置请求体
            // 使用xhr.send并设置请求头后，服务端再通过相应的解析json数据的方式进行获取数据。
            xhr.send(JSON.stringify(data));
        } else {
            xhr.send();
        }
        // 设置响应结果的类型为json,不设置默认时默认为TEXT,此时无法直接操作body中的数据
        xhr.responseType = 'json';
        // 4.处理结果
        xhr.onreadystatechange = function () {
            // 
            if (xhr.readyState === 4) {
                // 判断响应状态码 2xx
                if (xhr.status >= 200 && xhr.status < 300) {
                    // 成功的状态
                    resolve({
                        xhr,
                        status: xhr.status,
                        message: xhr.statusText,
                        body: xhr.response
                    });
                } else {
                    reject(new Error('请求失败，失败的状态码为' + xhr.status))
                }
            }
        }
    })
}

axios.get = function (url, options) {
    // 发送AJAX请求 GET
    return axios(Object.assign(options, { method: 'GET', url: url }));
}

axios.post = function (url, options) {
    return axios(Object.assign(options, { method: 'POST', url: url }));
}
axios.put = function (url, options) {
    return axios(Object.assign(options, { method: 'PUT', url: url }));
}
axios.delete = function (url, options) {
    return axios(Object.assign(options, { method: 'DELETE', url: url }));
}