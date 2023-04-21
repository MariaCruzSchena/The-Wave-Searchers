import { getFirestore, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const ItemContext = React.createContext();

const ItemProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  const [itemid, setItemid] = useState("");

  const idSetter = (identificator) => {
    setItemid(identificator);
  };

  useEffect(() => {
    if (itemid !== "") {
      const db = getFirestore();
      const itemRef = doc(db, "offshore", itemid);
      getDoc(itemRef).then((snapshot) => {
        const newItem = {
          id: snapshot.id,
          ...snapshot.data(),
        };
        setItem(newItem);
      });
    }
  }, [itemid]);

  return (
    <ItemContext.Provider value={{ item, idSetter }}>
      {children}
    </ItemContext.Provider>
  );
};

export { ItemProvider, ItemContext };
