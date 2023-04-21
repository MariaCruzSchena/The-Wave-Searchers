import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { ItemContext } from "../../contexts/ItemContext";

const ItemCount = ({ amount, setAmount }) => {
  const { item } = useContext(ItemContext);
  const { addItem, removeItem } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [purchase, setPurchase] = useState(false);

  const addButtonClickHandler = () => {
    setPurchase(true);
    addItem(item, count);
    setAmount(amount + count);
  };

  const removeButtonClickHandler = () => {
    removeItem(item.id);
    setPurchase(false);
  };

  return (
    <div className="itemDetailButtonsContainer">
      <div className="itemDetailButtonsSubcontainer">
        <button className="buttonsMinus" onClick={() => setCount(count - 1)}>
          -
        </button>
        <p className="buttonsAmount">{count}</p>
        <button className="buttonsPlus" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
      {!purchase ? (
        <button className="buttonsAddToCart" onClick={addButtonClickHandler}>
          Agregar al carrito
        </button>
      ) : (
        <button className="buttonsAddToCart">
          <Link to={"/cart"}>Ir a carrito</Link>
        </button>
      )}
      <button className="buttonsAddToCart" onClick={removeButtonClickHandler}>
        Remover del carrito
      </button>
    </div>
  );
};

export default ItemCount;
