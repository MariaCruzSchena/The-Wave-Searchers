import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailList = ({ item }) => {
    const [amount, setAmount] = useState(0);   
    console.log(amount);
    return (
       <ItemDetail item= {item} amount={amount} setAmount={setAmount} />
    )
}

export default ItemDetailList;

