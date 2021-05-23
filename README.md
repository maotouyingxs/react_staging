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
## 四、 [搜索案例相关知识](/docs/3_github搜索案例相关知识.md)
## 五、 [路由的基本使用](/docs/4_路由的基本使用.md)
## 六、 [路由组件与一般组件](/docs/5_路由组件与一般组件.md)
## 七、 [NavLink 与封装 NavLink](/docs/6_NavLink与封装NavLink.md)