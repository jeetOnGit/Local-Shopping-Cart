import { createContext, useState } from "react";
import { products } from "../Products";

export const ShoppingCon = createContext(null);



const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};


function ShoppingContext(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  
    let totalItems = 0;
    for(const item in cartItems){
      totalItems += cartItems[item]
    }
    
  
  

    const getTotalAmt = () => {
      let totalAmt = 0;
      for(const item in cartItems){
        if (cartItems[item] > 0) {
          let itemInfo = products.find((product) => product.id === Number(item))
          totalAmt += cartItems[item] * itemInfo.price
        }
      }
      return totalAmt
    } 
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextVal = {addToCart, removeFromCart, cartItems, getTotalAmt, totalItems}
  return (
    <ShoppingCon.Provider value={contextVal}>
      {props.children}
    </ShoppingCon.Provider>
  )
}

export default ShoppingContext;