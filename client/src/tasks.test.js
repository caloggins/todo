import * as at from './addTask'
import tasks from './tasks'

describe('Tasks tests...', () => {
    it('default tasks should be returned', () => {
        expect(tasks(undefined, {})).toEqual([])
    })

    it('unhandled actions should return the same state', () => {
        const state = [{ id: 1, description: 'get milk', done: false }]

        expect(tasks(state, {})).toBe(state)
    })

    it('when a task is added it should be in the state', () => {
        const state = []
        const action = { type: at.TASK_ADDED, body: 'get milk' }
        const expected = [{ id: 3, description: 'get milk', done: false }]

        expect(tasks(state, action)).toEqual(expected)
    })

    it('tasks should be added to the end of the list', () => {
        const state = [{ id: 1, description: 'get milk', done: false }]
        const action = { type: at.TASK_ADDED, body: 'get gas' }
        const expected = { id: 4, description: 'get gas', done: false }

        expect(tasks(state, action)[1]).toEqual(expected)
    })
})
