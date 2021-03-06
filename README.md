# react_staging
## 一、 [脚手架安装](/docs/1_脚手架安装.md)
## 二、 todoList 案例相关知识
   1. 拆分组件、实现静态组件，注意：className、style 的写法
   2. 动态初始化列表，如何确定将数据放在哪个组件的 state 中？
      - 某个组件使用：放在其自身的 state 中
      - 某些组件使用：放在他们共同的父组件 state 中（官方称此操作为：状态提升）
   3. 关于父子组件之间通信：
       1. 【父组件】给【子组件】传递数据：通过 props 传递
       2. 【子组件】给【父组件】传递数据：通过 props 传递，要求【父组件】提前给【子组件】传递一个函数
   4.注意 defaultChecked 和 checked 的区别，类似的还有：defaultValue 和 value
   5. 状态在哪里，操作状态的方法就在哪里
## 三、 [脚手架配置代理](/docs/2_react脚手架配置代理.md)
### 方法一

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

**说明**：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）



### 方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const proxy = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```

**说明**：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。
## 四、 [搜索案例相关知识](/docs/3_github搜索案例相关知识.md)
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
## 五、 [路由的基本使用](/docs/4_路由的基本使用.md)
1. 明确好界面中的导航区、展示区
2. 导航区的 a 标签改为 Link 标签
`<Link to="/xxx" >Demo</Link>`
3. 展示区写好 Route 标签进行路径的匹配
`<Route path='/xxx' component={Demo} />`
4. <App> 的最外侧包裹了一个 `<BrowserRouter>` 或者 `<HashRouter>`
## 六、 [路由组件与一般组件](/docs/5_路由组件与一般组件.md)
1. 写法不同：
   - 一般组件：`<Demo/>`
   - 路由组件：`<Route path="/demo" component={Demo}`
2. 存放位置不同：
   - 一般组件：compponents
   - 路由组件：pages
3. 接收到的 props 不同：
    - 一般组件：写组件标签时传递什么，就能收到什么
    - 路由组件：接受到三个固定的属性
    ```javascript
    history:
        go: ƒ go(n)
        goBack: ƒ goBack()
        goForward: ƒ goForward()
        push: ƒ push(path, state)
        replace: ƒ replace(path, state)
    location:
        pathname: "/about"
        search: ""
        state: undefined
    match:
        params: {}
        path: "/about"
        url: "/about"

## 七、 [NavLink 与封装 NavLink](/docs/6_NavLink与封装NavLink.md)
1. NavLink 可以实现路由链接的高亮，通过 activeClassName 指定样式名
2. 标签体内容是一个特殊的标签属性
3. 通过 this.props.children 可以获取标签体内容
## 八、 Switch 的使用
1. 通常情况下, path 和 component 是一一对应的关系
2. Switch 可以提高路由匹配效率（单一匹配）
## 九、 解决多级路由刷新页面样式丢失的问题
1. public/index.html 中引入样式时不写 ./ 写 / （常用）
2. public/index.html 中引入样式时不写 ./ 写 %PUBLIC_URL% (常用)
3. 使用 HashRouter 
## 十、 路由的严格匹配与模糊匹配
1. 默认使用的时模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
2. 开启严格匹配：`<Route exact={true} path='/about' component={About} />`
3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
## 十一、 Redirect 的使用
1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到 Readirect 指定的路由
2. 具体编码：
   ```javascript
    <Switch>
      <Route path='/about' component={About} />
      <Route path='/home' component={Home} />
      <Redirect to='/about'/>
    </Switch>
   ```
## 十二、 嵌套路由
1. 注册子路由时要写上父路由的 path 值
2. 路由的匹配时按照注册路由的顺序进行的
## 十三、 向路由组件传递参数
1. **params 参数**
   - 路由链接（携带参数）：`<Link to='/demo/test/tom/18'>详情</Link>`
   - 注册路由（声明接收）：`<Route path='/demo/test/:name/:age' component={Test} />`
   - 接收参数：`const {name,age} = this.props.match.params`
2. **search 参数**
   - 路由链接（携带参数）：`<Link to='/demo/test?name=tom&age=18'>详情</Link>`
   - 注册路由（无需声明，正常注册即可）：`<Route path='/demo/test' component={Test} />`
   - 接收参数：`const {search} = this.props.location`
   - 备注：获取到的 search 是 urlencoded 编码字符串，需要借助 querystring 解析
3. **state 参数**
   - 路由链接（携带参数）：`<Link to={{path:'/demo/test',state:{name:'tom},age:18}}>详情</Link>`
   - 注册路由（无需声明，正常注册即可）：`<Route path='/demo/test' component={Test} />`
   - 接收参数：`const {name,age} = this.props.location.state`
   - 备注：刷新也可以保留着参数
## 十四、 withRouter的使用
1. withRouter 可以加工一般组件，让一般组件具备路由组件所特有的API
2. withRouter 是一个新组件
`export default withRouter(Hearder)`