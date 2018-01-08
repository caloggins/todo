import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskForm from './TaskForm'
import './App.css'

export class App extends Component {
    renderItems() {
        return this.props.tasks.map(task => {
            return (
                <div className="list-group-item" key={task.id}>
                    <div>{task.description}</div>
                    <div className="btn btn-default">Delete</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="App">
                <div className="list-group">{this.renderItems()}</div>
                <TaskForm />
            </div>
        )
    }
}

function mapStateToProps({ tasks }) {
    return { tasks: tasks }
}

export default connect(mapStateToProps)(App)
