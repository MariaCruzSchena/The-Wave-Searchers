import { useState } from "react";

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0);

    return (
        <div className="itemDetailContainer">
            <div className="itemDetailImg"><img className="itemDetailImg2" src={item.thumbnail} alt="" /></div>
            <div className="itemDetailContent">
                <h3 className="itemDetailTitle">{item.title}</h3>
                <h4 className="itemDetailPrice">$ARS {item.price}</h4>
                <p className="itemDetailParagraph">Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <div className='itemDetailButtonsContainer' >
                    <div className='itemDetailButtonsSubcontainer'>
                        <button
                            className='buttonsMinus'
                            onClick={() => setCount(count - 1)}
                        >-</button>
                        <p className='buttonsAmount'>{count}</p>
                        <button
                            className='buttonsPlus'
                            onClick={() => setCount(count + 1)}
                        >+</button>
                    </div>
                    <button className='buttonsAddToCart'>Agregar al carrito</button>
                </div >
            </div>
        </div>
    )
}

export default ItemDetail;

