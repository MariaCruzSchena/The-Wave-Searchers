import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
const ProductsContext = React.createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  const categorySetter = (value) => {
    setCategory(value);
  };

  useEffect(() => {
    if (category == "") {
      const db = getFirestore();
      const items = collection(db, "offshore");
      getDocs(items).then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(docs);
      });
    } else {
      const db = getFirestore();
      const items = collection(db, "offshore");
      const q = query(items, where("category", "==", category.trim()));
      getDocs(q).then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(docs);
      });
    }
  }, [category]);

  return (
    <ProductsContext.Provider value={{ products, categorySetter }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
