// 创建一个新的Promise对象
let promise = new Promise(function(resolve, reject) {
    // 模拟一个异步操作，例如从服务器获取数据
    setTimeout(function() {
        // 假设数据获取成功
        let data = "Hello Promise"
        // 调用resolve函数，并传递数据
        resolve(data)
    }, 1000) // 延迟1秒执行
})

// 调用then方法，处理Promise的结果
promise.then(
    function(value) { // onFulfilled函数
        // 打印成功的数据
        console.log(value)
    },
    function(reason) { // onRejected函数
        // 打印失败的原因
        console.error(reason)
    }
)