1. 设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。
2. ES6 小知识点：解构赋值+重命名
``` javascript
    let obj = {a:{b:1}}
    const {a} = obj; // 传统解构赋值
    const {a:{b}} = obj; // 连续解构赋值
    const {a:{b:value}} = obj; // 连续解构赋值+重命名
```
3. 消息订阅与发布机制
   1. 先订阅，再发布（理解：有一种隔空对话的ganjue）
   2. 适用于任意组件间通信
   3. 要在组件的 componentWillUnmout 中取消订阅
4. fetch 发生请求（关注分离的设计思想）
    try{
        const response = await fetch(`/api1/search/user2?q=${keyWord}`)
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log('请求出错',error)
    }