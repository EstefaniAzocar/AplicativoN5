import React, { useContext } from "react";
import CartContext from "../../context/cartContext";
import styles from "./styles.module.scss";

export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { addItemToCart, restItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { amount, price } = item;

  return (
    <div className={styles.cartItem}>
      <img src={item.img} alt={item.name} />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.name}</p>
          <div className={styles.buttons}>
            <button onClick={() => addItemToCart(item)}>
              +
            </button>
            <button onClick={() => restItemToCart(item)}>
              -
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div>{amount}</div>
          <p>Total: ${amount * price}</p>
        </div>
      </div>
    </div>
  );
};