import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";

const ItemContext = React.createContext();

const ItemProvider = ({children}) => {
    const [item, setItem] = useState([]);
    const { productId } = useParams();
   
    useEffect (() => {        
        if(productId){
            const db = getFirestore();
            const itemRef = doc(db, 'offshore', productId);
            getDoc(itemRef).then((snapshot)=>{
                const newItem = {
                    id: snapshot.id,
                    ...snapshot.data()
                };
                setItem(newItem)
            });
        } 
    }, [productId])
        

    return (
        <ItemContext.Provider value={{item}}>
            {children}
        </ItemContext.Provider>
    )
}

export {ItemProvider, ItemContext}