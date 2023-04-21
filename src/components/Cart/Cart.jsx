import React, { useContext, useEffect } from "react";
import { CartContext } from "./../../contexts/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartproducts, clear, precioTotal, setPrecioTotal, totalPrice } =
    useContext(CartContext);

  useEffect(() => {
    setPrecioTotal(totalPrice());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartproducts]);

  return (
    <>
      {cartproducts.length > 0 ? (
        <>
          {cartproducts.map((element) => (
            <CartItem key={element.id} item={element} />
          ))}
          <div className="cartContainer2">
            <h2 className="cartTitle">TOTAL: $ARS {precioTotal}</h2>
            <button className="cartButton" onClick={clear}>
              Vaciar carrito
            </button>
            <Link to={"/form"}>
              <button className="cartButton">Continuar</button>
            </Link>
          </div>
        </>
      ) : (
        <div className="emptyCartContainer">
          <h2 className="cartTitle">Tu carrito esta vacio</h2>
          <Link to={"/"}>
            <button className="emptyCartButton"> Regresar a home</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
