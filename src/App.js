// 创建外壳组件
import React, { Component } from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'  // Home 是路由组件
import About from './pages/About'  // About 是路由组件
import Header from './components/Header' // Header 是一般组件

// 创建并暴露 App 组件
export default class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter></BrowserRouter>
                <div className="row">
                    <Header />
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生 html 中，靠 <a></a> 跳转 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a> */}
                            {/* 在 React 中靠路由链接实现切换组件 -- 编写路由链接*/}
                            <Link className="list-group-item" to="/about" >About</Link>
                            <Link className="list-group-item" to="/home" >Home</Link>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Route path='/about' component={About} />
                                <Route path='/home' component={Home} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
