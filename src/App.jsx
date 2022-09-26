import "./App.scss";
import React from "react";
import Home from "./componentes/home/home";
import { CartProvider } from "./context/cartContext";
import AddProducts from "./componentes/form/form";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  /* Envolvemos la home con provider del context */
  return (

    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/nuevoProducto' element={< AddProducts/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
