import * as React from 'react'
import {render, screen} from '@testing-library/react'
import Home from './componentes/home/home'
import { CartProvider } from './context/cartContext'
import {BrowserRouter} from 'react-router-dom' 
import AddProducts from './componentes/form/form'


test('product pages', () => {
 

  render(
      <CartProvider>
        <BrowserRouter>
          <Home/>
        </BrowserRouter>
      </CartProvider>
  )

  expect(screen.getByRole('heading')).toHaveTextContent(/Tienda Stefany/i)
})

test('cartProvider pages', () => {
 

  render(
      <CartProvider>
        <BrowserRouter>
          <AddProducts/>
        </BrowserRouter>
      </CartProvider>
  )
  
  expect(screen.getByRole('heading')).toHaveTextContent(/Nuevo producto/i)
})