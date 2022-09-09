import { useState } from "react";

import ItemCount from "./ItemCount";


const ItemDetail = ({ item }) => {
    const [amount, setAmount] = useState(0);
    console.log(amount);

    return (
        <div className="itemDetailContainer">
            <div className="itemDetailImg"><img className="itemDetailImg2" src={item.thumbnail} alt="" /></div>
            <div className="itemDetailContent">
                <h3 className="itemDetailTitle">{item.title}</h3>
                <h4 className="itemDetailPrice">$ARS {item.price}</h4>
                <p className="itemDetailParagraph">Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <ItemCount amount={amount} setAmount={setAmount}/> 
            </div>
        </div>
    )
}

export default ItemDetail;

