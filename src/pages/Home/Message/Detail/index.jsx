import React, { Component } from 'react'


const detailData = [
    { id: '01', content: '我是消息1' },
    { id: '02', content: '我是消息2' },
    { id: '03', content: '我是消息3' }
]
export default class Detail extends Component {
    render() {
        // 接收 params 参数
        const { id, title } = this.props.match.params
        const contetdResult = detailData.find((detailObj) => {
            return detailObj.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>title:{title}</li>
                <li>content:{contetdResult.content}</li>
            </ul>
        )
    }
}
