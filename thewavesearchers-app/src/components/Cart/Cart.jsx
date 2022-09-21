import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./../../contexts/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartproducts, clear, totalPrice } = useContext(CartContext);
  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    setPrecioTotal(totalPrice());
  }, [cartproducts]);
  console.log(cartproducts);
  
  return (
    <>
      {cartproducts.length > 0 ? (
        <>
          {cartproducts.map((element) => (
            <CartItem item={element} />
          ))}
          <div className="cartContainer2">
            <h2 className="cartTitle">TOTAL: $ARS {precioTotal}</h2>
            <button className="cartButton" onClick={clear}>
                Vaciar carrito
            </button>
            <button className="cartButton" >
                Continuar
            </button>
          </div>
        </>
      ) : (
        <div className="emptyCartContainer">
          <h2 className="cartTitle">Tu carrito esta vacio</h2>
          <Link to={'/'}><button className="emptyCartButton"> Regresar a home</button></Link>
        </div>
      )}
    </>
  )
}

export default Cart;
