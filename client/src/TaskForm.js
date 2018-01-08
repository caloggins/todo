import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addTask from './addTask'

export class TaskForm extends Component {
    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)

        this.state = { description: '' }
    }

    onChange(event) {
        this.setState({ description: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault()

        const description = this.state.value;
        this.props.addTask(description)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="taskDescription">Description:</label>
                    <input
                        className="form-control"
                        id="taskDescription"
                        placeholder="Enter description."
                        value={this.state.value}
                        onChange={this.onChange}
                    />
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </div>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTask }, dispatch)
}

export default connect(null, mapDispatchToProps)(TaskForm)
