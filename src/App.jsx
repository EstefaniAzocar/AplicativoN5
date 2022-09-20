import "./App.scss";
import React from "react";
import Home from "./componentes/home";
import { CartProvider } from "./context/cartContext";

const App = () => {
  /* Envolvemos la home con provider del context */
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
};

export default App;
