import { createContext, useEffect, useState } from "react";
import { ProductsData } from "../Data/ProdusctsData";

/* Creamos el context, se le puede pasar un valor inicial */
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const newProducts = ProductsData 

    setProducts(newProducts)
    // await axios
    //   .get("http://localhost:4000/products")
    //   .then(({ data }) => setProducts(data.products));
  };

  const getProductsCart = async () => {
    // return await axios
    //   .1get("http://localhost:3000/products-cart")
    //   .then(({ data }) => setCartItems(data.productsCart))
    //   .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
    getProductsCart();
  }, []);

  const addItemToCart = async (product) => {
    // const { nombre, img, precio } = product;
    //preguntarme si ya existe en el carrito
      //buscarlo en el carrito y sumarle 1
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
  
  
    // await axios.post("http://localhost:3000/products-cart", { nombre, img, precio });

    // getProducts();
    // getProductsCart();
    setCartItems(newCart)
  };

  const editItemToCart = async (id, query, amount) => {
    if (query === "del" && amount === 1) {
      // await axios
      //   .delete(`http://localhost:3000/products-cart/${id}`)
      //   .then(({ data }) => console.log(data));
    } else {
      // await axios
      //   .put(`http://localhost:3000/products-cart/${id}?query=${query}`, {
      //     amount,
        // })
        // .then(({ data }) => console.log(data));
    }

    getProducts();
    getProductsCart();
  };

  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider
      value={{ cartItems, products, addItemToCart, editItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;