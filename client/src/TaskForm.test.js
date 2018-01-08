import React from 'react'
import Container, { TaskForm } from './TaskForm'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'

describe('TaskForm tests...', () => {
    describe('Component rendering tests...', () => {
        it('renders correctly', () => {
            const tree = shallow(<TaskForm />)
            expect(tree).toMatchSnapshot()
        })
    })

    describe('Container tests...', () => {
        const mockStore = configureStore()
        let tree, store

        beforeEach(() => {
            store = mockStore()
            store.dispatch = jest.fn()
            tree = mount(<Container store={store} />)
        })

        it('it does not allow the default action', () => {
            const preventDefault = jest.fn()

            tree.find('form').simulate('submit', { preventDefault })

            expect(preventDefault).toHaveBeenCalled()
        })

        it('it creates an event', () => {
            const preventDefault = jest.fn()

            tree.find('form').simulate('submit', { preventDefault })

            expect(store.dispatch).toHaveBeenCalled()
        })
    })
})
