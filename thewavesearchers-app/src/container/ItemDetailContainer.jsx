import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { productId } = useParams();

    const getItem = async () => {
        try {
            const response = await fetch('https://api.mercadolibre.com/items/' + productId)
            const data = await response.json();
            setItem(data);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        setTimeout(() => {
            getItem();
        }, 2000);
    }, [productId])
    console.log(item)

    return <ItemDetail item={item} />
}



export default ItemDetailContainer;