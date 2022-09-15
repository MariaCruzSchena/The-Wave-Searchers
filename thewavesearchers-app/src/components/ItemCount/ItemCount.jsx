import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const ItemCount = ({amount, setAmount, item}) => {
    const {  addItem, removeItem, clear} = useContext(CartContext);
    const [count, setCount] = useState(0);
    console.log(count);

    const addButtonClickHandler = () => {
        
        addItem(item.title, item.price, amount)
    }
    
    const removeButtonClickHandler = () => {
        removeItem(item.title)
    }

    const clearButtonClickHandler = () => {
        clear()
    }

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
                onClick={()=> {setAmount(amount + count); addButtonClickHandler()}}             
            >Agregar al carrito</button>        
            <button 
                className='buttonsAddToCart'
                onClick={()=> removeButtonClickHandler()}              
            >Remover del carrito</button> 
            <button
                className='buttonsAddToCart'
                onClick={()=> clearButtonClickHandler()}                
            >Vaciar el carrito</button>
            <button className="buttonsAddToCart"><Link to={'/cart'}>Comprar</Link></button>            
        </div >
    )
}

export default ItemCount;