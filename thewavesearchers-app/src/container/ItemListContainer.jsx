import ItemList from './../components/Item/ItemList'
// import { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom';
// import { getFirestore, collection, getDocs, query } from 'firebase/firestore'

const ItemListContainer = () => {
    // const [products, setProducts] = useState([]);
    // // const [category, setCategory] = useState([]);
    // const { categoryId } = useParams();

    // const bringData = async () => {
    //     try {
    //         const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=tabladesurf&limit=20')
    //         const data = await response.json();
    //         if (categoryId){
    //             setProducts(data.results.filter((el)=> el.title.includes(categoryId)));
    //             console.log(products)
    //         } else {
    //         setProducts(data.results)
    //         }
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // useEffect(() => {
    //     bringData();
    // }, [categoryId])
    // console.log(products)

    // useEffect(() => {
    //     if (categoryId) {
    //         const db = getFirestore();
    //         const items = collection(db, 'items');
    //         const q = query(items , where('category', '==', categoryId));
    //         getDocs(q).then((snapshot) => {
    //             const docs = snapshot.docs.map((doc) => ({
    //                 id: doc.id,
    //                 ...doc.data(),
    //             }));
    //             setProducts(docs)
    //         });

    //     } else {
    //         const db = getFirestore();
    //         const items = collection(db, 'items');
    //         getDocs(items).then((snapshot) => {
    //             const docs = snapshot.docs.map((doc) => ({
    //                 id: doc.id,
    //                 ...doc.data(),
    //             }));
    //             setProducts(docs)
    //         });
    //     }
    // }, [categoryId]);


    return (
        < div className="bodyContainer" >
            <div className='productsContainer'>
                <ItemList  />
            </div>
        </div>
    )
}

export default ItemListContainer;
