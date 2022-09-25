/* eslint-disable testing-library/prefer-screen-queries */
import * as React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import { CartProvider } from '../../context/cartContext'
import {BrowserRouter} from 'react-router-dom' 
import AddProducts from '../form/form'

test('renders input with a label "nombre"', () => {
  const utils = render(
    <CartProvider>
      <BrowserRouter>
        <AddProducts/>
      </BrowserRouter>
    </CartProvider>
  )
  const input = utils.getByLabelText('name')
    fireEvent.change(input, {target: {value: 'arepa'}})
  expect(input.value).toBe('arepa')

})

test('renders input with a label "precio"', () => {
  const utils = render(
    <CartProvider>
      <BrowserRouter>
        <AddProducts/>
      </BrowserRouter>
    </CartProvider>
  )
  const input = utils.getByLabelText('price')
    fireEvent.change(input, {target: {value: '100'}})
  expect(input.value).toBe('100')

})