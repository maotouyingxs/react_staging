import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    state = {
        users: [],  // users初始值为数组
        isFirst: true, // 是否第一次打开页面
        isLoading: false, // 标识是否处于加载中
        err: ''  // 存储请求相关的错误信息
    }

    componentDidMount() {
        // 订阅消息
        this.token = PubSub.subscribe('listdata', (message, stateObj) => {
            this.setState(stateObj)
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const { users, isFirst, isLoading, err } = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
                        isLoading ? <h2>Loading...</h2> :
                            err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                                users.map((userObj) => {
                                    return <Item key={userObj.id} user={userObj} />
                                })
                }
            </div>
        )
    }
}
