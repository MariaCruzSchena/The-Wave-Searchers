import React, {useState} from "react";


const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [cartproducts, setCartproducts] = useState([]);
    console.log(cartproducts)
    

    const isInCart = (title) =>{
      return cartproducts.some(el=> el.title.includes(title))
      
    }

    const addItem = (title, price, amount) => {           
        if (!isInCart(title)) {                 
            setCartproducts([...cartproducts, {title, price, amount}])                     
        } else {
            console.log("Ese producto ya se encuentra en el carrito")
        }         
    }   


    const removeItem = (title) => {  
        const names = cartproducts.map((el)=> el.title);        
        const index = names.indexOf(title)        
        cartproducts.splice(index, 1)       
        setCartproducts(cartproducts) 
                       
    }
    
    const clear = () =>{
       setCartproducts([]);       
    }

    return (
        <CartContext.Provider value={{addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}