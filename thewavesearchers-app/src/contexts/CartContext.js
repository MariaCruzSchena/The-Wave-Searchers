import React, {useState} from "react";

const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [cartproducts, setCartproducts] = useState([]);
    console.log(cartproducts)
    

    const isInCart = (title) =>{
      return cartproducts.find((e) => e.title === title);
      
    }

    const addItem = (item, quantity) => {            
        const previous = isInCart(item.title)

        if (!previous) {    
            item.quantity = quantity
            setCartproducts([...cartproducts, item])                     
        } else {
            console.log("Ese producto ya se encuentra en el carrito")
            const newcart = cartproducts.filter((e) => e.title !== item.title);
            item.quantity = quantity + previous.quantity;
            newcart.push(item);
            setCartproducts(newcart);
        }         
    }   


    const removeItem = (title) => {  
        // const names = cartproducts.map((el)=> el.title);        
        // const index = names.indexOf(title)        
        // cartproducts.splice(index, 1)       
        // setCartproducts(cartproducts) 

        setCartproducts(cartproducts.filter((e) => e.title !== title));                       
    }

    const changeAmount = (item, newcount)=>{               
        const newcart = cartproducts.filter((e) => e.title !== item.title);
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
        // let total = 0;
        // cartproducts.forEach((item) => {
        //   total = total + item.quantity;
        // });
        // return total;

        return cartproducts.reduce((acc,el)=> acc + el.quantity, 0)
    };

    return (
        <CartContext.Provider value={{cartproducts, addItem, removeItem, clear, totalPrice, totalProducts, changeAmount}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}