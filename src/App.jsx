import "./App.scss";
import React from "react";
import Home from "./componentes/home/home";
import { CartProvider } from "./context/cartContext";
import AddProducts from "./componentes/form/form";

const App = () => {
  /* Envolvemos la home con provider del context */
  return (
    <CartProvider>
      <Home />
      <AddProducts/>
    </CartProvider>
  );
};

export default App;
