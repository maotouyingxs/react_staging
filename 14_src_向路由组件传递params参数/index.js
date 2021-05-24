// 引入react核心库
import React from 'react'
// 引入ReactDOM
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// 引入 App 组件
import App from './App'

// 渲染APP到页面
ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'))