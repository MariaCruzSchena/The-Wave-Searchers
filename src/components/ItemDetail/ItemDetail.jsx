import { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ amount, setAmount }) => {
  const { item } = useContext(ItemContext);
  return (
    <div className="itemDetailContainer">
      <div className="itemDetailImg">
        <img className="itemDetailImg2" src={item.image} alt="" />
      </div>
      <div className="itemDetailContent">
        <h3 className="itemDetailTitle">{item.title}</h3>
        <h4 className="itemDetailPrice">$ARS {item.price}</h4>
        <p className="itemDetailParagraph">{item.description}</p>
        <ItemCount amount={amount} setAmount={setAmount} item={item} />
      </div>
    </div>
  );
};

export default ItemDetail;
