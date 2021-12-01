import * as renderer from 'react-test-renderer'
import * as React from 'react'
import MyButton from "../myButton";


describe('button', () => {
    it('是个 div', () => {
        const json = renderer.create(<MyButton/>).toJSON()
        expect(json).toMatchSnapshot()
    })
})