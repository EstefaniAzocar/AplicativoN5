import { createContext, useEffect, useState } from "react";
import { ProductsData } from "../Data/ProdusctsData";

/* Creamos el context, se le puede pasar un valor inicial */
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts =  () => {
    const productsFromStorage = JSON.parse(window.localStorage.getItem('products'))
    const newProducts = productsFromStorage || ProductsData

    setProducts(newProducts)
  };

  const getCartItems = () => {
    const cartFromStorage = JSON.parse(window.localStorage.getItem('cart'))
    const cart = cartFromStorage || []

    setCartItems(cart)
  }

  useEffect(() => {
    getProducts();
    getCartItems()
  }, []);

  const addItemToCart = (product) => {
      //preguntarme si ya existe en el carrito
      //no existe
      //agregarlo con un 1
      let newCart

      const productoExistente = cartItems.find((productoDentroCarrito)=> productoDentroCarrito.id === product.id) //me devuelve un unico elemento
  
      // si existia en el carrito
      if(productoExistente){
  
  
          newCart = cartItems.map((productCarrito) => {
  
              if (productCarrito.id === product.id) {
  
                const updatedItem = {
                  ...productCarrito,
                  amount: productCarrito.amount + 1
                };
        
                return updatedItem;
              }
        
              return productCarrito;
            });
        
  
      }else{
          product.amount=1
          newCart = [
              ...cartItems,
              product
          ]
      }
  
      
      const cartToStorage = JSON.stringify(newCart) 
      window.localStorage.setItem('cart', cartToStorage)

      setCartItems(newCart)

  };

  const restItemToCart =  (product)=> {
        
    let newCart = cartItems.map((productCarrito) => {
  
      if (productCarrito.id === product.id) {

        const updatedItem = {
          ...productCarrito,
          amount: productCarrito.amount - 1
        };

        return updatedItem;
      }

      return productCarrito;
    });

    newCart = newCart.filter(productCarrito => productCarrito.amount > 0)

    const cartToStorage = JSON.stringify(newCart) 
    window.localStorage.setItem('cart', cartToStorage)

    setCartItems(newCart)


  }

  const addProduct = (product) => {
    const newProducts = [
      ...products,
      product
    ]

    
    const productsToStorage = JSON.stringify(newProducts) 
    window.localStorage.setItem('products', productsToStorage)

    setProducts(newProducts)
  }

  const resetCart = () => {
    setCartItems([])
    const cartToStorage = JSON.stringify([]) 
    window.localStorage.setItem('cart', cartToStorage)
  }

  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider
      value={{ cartItems, products, addItemToCart, restItemToCart, addProduct,resetCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;