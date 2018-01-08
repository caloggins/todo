import addTask, * as at from './addTask'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const mock = configureStore([thunk])

describe('addTask tests...', () => {
    it('when called it creates an action', () => {
        const store = mock()
        const body = 'get milk'
        const expected = [{ type: at.TASK_ADDED, body: body }]

        store.dispatch(addTask(body))

        expect(store.getActions()).toEqual(expected)
    })
})
