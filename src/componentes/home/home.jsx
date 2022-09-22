import React from "react";
import Cart from "../cart/cart";
import Products from "../products/products";
import styles from './styles.modules.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <Cart />
      <Products />
    </div>
  );
};

export default Home;