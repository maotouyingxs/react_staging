import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Searhc extends Component {
    search = () => {
        // 获取用户的输入
        // const {value} = this.keyWordElement
        const { keyWordElement: { value: keyWord } } = this
        // 发送请求前通知List更新状态
        PubSub.publish('listdata', { isFirst: false, isLoading: true })
        // 发送网络请求
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response => {PubSub.publish('listdata',{ isLoading: false, users: response.data.items }) },
            error => { PubSub.publish('listdata', { isLoading: false, err: error.message }) }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索GitHub用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
