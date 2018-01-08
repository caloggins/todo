import './addTask'

let id = 1

function handleTaskAdded(state, action) {
    const newTask = { id: id++, description: action.body, done: false}
    return () => [...state, newTask]
}

const tasks = (currentState = [], action) => {
    var handlers = {
        TASK_ADDED: handleTaskAdded(currentState, action),
        'DEFAULT': () => currentState
    }

    return (handlers[action.type] || handlers['DEFAULT'])()
}

export default tasks