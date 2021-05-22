// 创建外壳组件
import React,{Component} from 'react'
import './Hello.css'

// 创建并暴露 App 组件
export default class Hello extends Component {
    render() {
        return (
            <h2 className='title'>
                hello,react!
            </h2>
        )
    }
}
