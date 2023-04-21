import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailList = () => {
  const [amount, setAmount] = useState(0);
  return <ItemDetail amount={amount} setAmount={setAmount} />;
};

export default ItemDetailList;
