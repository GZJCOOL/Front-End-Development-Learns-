function ajax(options) {
    // 返回 Promise 对象
    return new Promise(function(resolve, reject) {
      // 创建XMLHttpRequest 对象
      var xhr = new XMLHttpRequest();
      xhr.open(options.method, options.url);
      if (options.headers) {
        for (var header in options.headers) {
          xhr.setRequestHeader(header, options.headers[header]);
        }
      }
      // 监听请求状态的变化
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // 请求成功，调用 resolve 并传递响应数据
            resolve(xhr.response);
          } else {
            // 请求失败，调用 reject 并传递错误信息
            reject(new Error(xhr.statusText));
          }
        }
      };
      // 发送请求
      xhr.send(options.data);
    });
  }
  ajax({
    method: 'GET',
    url: 'https://www.bilibili.com/',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer xxxxxxxxxxxxxxxxxx'
    }
  }).then(function(response) {
    console.log(response);
  }).catch(function(error) {
    console.error(error);
  });
  
  