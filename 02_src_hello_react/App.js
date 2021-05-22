// 创建外壳组件
import React, { Component } from 'react'

import Hello from './components/Hello/Hello'
import Welcom from './components/Welcome/Welcome'

// 创建并暴露 App 组件
export default class App extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcom />
            </div>
        )
    }
}
