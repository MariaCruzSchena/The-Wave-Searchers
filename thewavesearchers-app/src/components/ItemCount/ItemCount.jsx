import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({amount, setAmount}) => {
    const [count, setCount] = useState(0);
    console.log(count);
    return (
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
            <button 
                className='buttonsAddToCart'
                onClick={()=> setAmount(amount + count)}               
            >Agregar al carrito</button>
            <button className="buttonsAddToCart"><Link to={'/cart'}>Comprar</Link></button>            
        </div >
    )
}

export default ItemCount;