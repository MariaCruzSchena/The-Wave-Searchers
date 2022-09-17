import React, {useState} from "react";

const CartContext = React.createContext();

const CartProvider = ({children}) => {

    const [cartproducts, setCartproducts] = useState([]);
    console.log(cartproducts)

    const isInCart = (title) =>{
       cartproducts.includes(title)
      
    }

    const addItem = (title, price, amount) => {     
        isInCart(title);   
        if (!isInCart) {            
            setCartproducts([...cartproducts, {title, price, amount}])
            console.log(cartproducts)          
        } else {
            console.log("Ese producto ya se encuentra en el carrito")
        } 
        
    }   

    const removeItem = (title) => {                   
        let index =  cartproducts.indexOf(title)        
        if (index =! -1){
            setCartproducts(cartproducts.splice(index, 1))
            console.log(cartproducts)
        } else {
            console.log("No has agregado este producto al carrito aún")
        }               
    }
    
    const clear = () =>{
       setCartproducts([]);       
    }

    return (
        <CartContext.Provider value={{cartproducts, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}