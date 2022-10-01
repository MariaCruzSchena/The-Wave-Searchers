import React, {useState} from "react";
const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [cartproducts, setCartproducts] = useState([]);
    console.log(cartproducts)
    const [precioTotal, setPrecioTotal] = useState(0);
    

    const isInCart = (id) =>{
      return cartproducts.find((e) => e.id === id);
      
    }

    const addItem = (item, quantity) => {            
        const previous = isInCart(item.id)

        if (!previous) {    
            item.quantity = quantity
            setCartproducts([...cartproducts, item])                     
        } else {
            console.log("Ese producto ya se encuentra en el carrito")
            const newcart = cartproducts.filter((e) => e.id !== item.id);
            item.quantity = quantity + previous.quantity;
            newcart.push(item);
            setCartproducts(newcart);
        }         
    }   

    const removeItem = (id) => { 
        setCartproducts(cartproducts.filter((e) => e.id !== id));                       
    }

    const changeAmount = (item, newcount)=>{               
        const newcart = cartproducts.filter((e) => e.id !== item.id);
        item.quantity = newcount;
        newcart.push(item);
        setCartproducts(newcart);
    }
    
    const clear = () =>{
       setCartproducts([]);       
    }

    const totalPrice = () => {
        let tot = 0;
        cartproducts.forEach((item) => {
          tot = tot + item.price * item.quantity;
        });
        return tot;
    };

    const totalProducts = () => {
        return cartproducts.reduce((acc,el)=> acc + el.quantity, 0)
    };
  

    return (
        <CartContext.Provider value={{cartproducts, addItem, removeItem, clear, totalPrice, totalProducts, changeAmount, precioTotal, setPrecioTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}