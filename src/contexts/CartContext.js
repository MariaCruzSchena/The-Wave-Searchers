import React, { useState } from "react";
const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cartproducts, setCartproducts] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);

  const isInCart = (id) => {
    return cartproducts.find((e) => e.id === id);
  };

  const addItem = (item, quantity) => {
    const previous = isInCart(item.id);

    if (!previous) {
      item.quantity = quantity;
      setCartproducts([...cartproducts, item]);
    } else {
      const index = cartproducts.findIndex((e) => e.id === item.id);
      let newcart = [...cartproducts];
      newcart[index].quantity = quantity;
      setCartproducts(newcart);
    }
  };

  const removeItem = (id) => {
    setCartproducts(cartproducts.filter((e) => e.id !== id));
  };

  const changeAmount = (item, newcount) => {
    const index = cartproducts.findIndex((e) => e.id === item.id);
    let newcart = [...cartproducts];
    newcart[index].quantity = newcount;
    setCartproducts(newcart);
  };

  const clear = () => {
    setCartproducts([]);
  };

  const totalPrice = () => {
    let tot = 0;
    cartproducts.forEach((item) => {
      tot = tot + item.price * item.quantity;
    });
    return tot;
  };

  const totalProducts = () => {
    return cartproducts.reduce((acc, el) => acc + el.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartproducts,
        addItem,
        removeItem,
        clear,
        totalPrice,
        totalProducts,
        changeAmount,
        precioTotal,
        setPrecioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
