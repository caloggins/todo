import React from 'react'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { App } from './App'

describe('App tests...', () => {
    describe('component tests', () => {
        it('renders correctly', () => {
            const props = {
                tasks: []
            }
            const tree = shallow(<App {...props} />)
            expect(tree).toMatchSnapshot()
        })

        it('it renders correctly', () => {
            const props = {
                tasks: [
                    { id: 1, done: false, description: 'Get groceries' },
                    { id: 2, done: true, description: 'Get gas' },
                    { id: 3, done: false, description: 'Pay bills' }
                ]
            }
            const tree = shallow(<App {...props} />)
            expect(tree).toMatchSnapshot()
        })
    })
})
