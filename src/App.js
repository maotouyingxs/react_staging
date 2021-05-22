// 创建外壳组件
import React, { Component } from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

// 创建并暴露 App 组件
export default class App extends Component {
    // 状态在哪里，操作状态的方法就在哪里 

    // 初始化状态
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '敲代码', done: false }
        ]
    }
    // 用于添加一个todo，接收的参数时todo对象
    addTodo = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos });
    }

    // 用于更新一个todo对象
    updateTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map((todo) => {
            if (todo.id === id) return { ...todo, done }
            else return todo
        })
        this.setState({ todos: newTodos })
    }

    // 用于删除一个 todo
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({ todos: newTodos })
    }

    checkAllTodo = (done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done }
        })
        this.setState({ todos: newTodos })
    }

    clearAllDone = () => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done
        })
        this.setState({ todos: newTodos })
    }
    render() {
        const { todos } = this.state
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
                </div>
            </div>
        )
    }
}
