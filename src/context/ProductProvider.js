// src/context/ProductProvider.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAllProducts } from '../backend/controllers/ProductController';

// Create context
const ProductContext = createContext();

// ProductProvider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartIcon, setCartIcon] = useState(false)
  const [productID,setProductID] = useState(null)
  const [cart, setCart] = useState([]); // Cart state
  

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await getAllProducts(); 
        setProducts(response);
        console.log("data",response)
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
        // Check if the product already exists in the cart
        const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
        if (existingProductIndex !== -1) {
            // If product exists, update the quantity
            const updatedCart = [...prevCart];
            updatedCart[existingProductIndex].quantity += 1;
            return updatedCart;
        }
        // If product doesn't exist, add it to the cart
        return [...prevCart, { ...product, quantity: 1 }];
    });
};



  return (
    <ProductContext.Provider value={{ products, loading,cartIcon,setCartIcon,productID,setProductID ,cart, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};


export const useProducts = () => useContext(ProductContext);
