import React, { useContext, useState } from "react";
import { CartContext } from "./../../contexts/CartContext";
import Swal from "sweetalert2";

const CartItem = ({ item }) => {
  const { removeItem, changeAmount } = useContext(CartContext);
  const [newcount, setNewcount] = useState(item.quantity);

  const handleDelete = () => {
    removeItem(item.id);
  };

  const handleChange = () => {
    changeAmount(item, newcount);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Saved!",
      showConfirmButton: false,
      timer: 1500,
      width: "22rem",
      heightAuto: "13rem",
    });
  };

  return (
    <>
      <div className="cartContainer">
        <div className="cartImg">
          <img className="cartImg2" src={item.image} alt="" />
        </div>
        <div className="cartContent">
          <h3 className="cartTitle">{item.title}</h3>
          <h4 className="cartPrice">Cantidad: {newcount}</h4>
          <h4 className="cartPrice">$ARS {item.price}</h4>
          <div className="buttonsSubcontainerChange">
            <button
              className="buttonsMinusChange"
              onClick={() => setNewcount(newcount - 1)}
            >
              -
            </button>
            <p className="buttonsAmountChange">{newcount}</p>
            <button
              className="buttonsPlusChange"
              onClick={() => setNewcount(newcount + 1)}
            >
              +
            </button>
          </div>
          <button className="cartButtonChange" onClick={handleChange}>
            Confirmar cantidad
          </button>
          <button className="cartButtonChange" onClick={handleDelete}>
            Borrar
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
