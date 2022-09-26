import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
const ProductsContext = React.createContext();

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);    
    const { categoryId } = useParams();
      
  
    useEffect(() => {       
        if (!categoryId) {    
            const db = getFirestore();
            const items = collection(db, 'offshore');
            getDocs(items).then((snapshot) => {
                const docs = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(docs)
            });           

        } else {        
            const db = getFirestore();
            const items = collection(db, 'offshore');   
            const q = query(items , where('category', '==', categoryId.trim()));
            getDocs(q).then((snapshot) => {
                const docs = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(docs)
            });
        }
    }, [categoryId]);

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}

export {ProductsProvider, ProductsContext}