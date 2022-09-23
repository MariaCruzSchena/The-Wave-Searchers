import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const ProductsContext = React.createContext();

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    
    const changeCategory = (category) =>{
        setCategory(category)
    }

    useEffect(() => {
        const db = getFirestore();
        const items = collection(db, 'items');
        if (!category) {    
            // const db = getFirestore();
            // const items = collection(db, 'items');
            getDocs(items).then((snapshot) => {
                const docs = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(docs)
            });           

        } else {
            

            const q = query(items , where('category', '==', category));
            getDocs(q).then((snapshot) => {
                const docs = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(docs)
            });
        }
    }, [category]);

    return (
        <ProductsContext.Provider value={{products, changeCategory}}>
            {children}
        </ProductsContext.Provider>
    )
}

export {ProductsProvider, ProductsContext}