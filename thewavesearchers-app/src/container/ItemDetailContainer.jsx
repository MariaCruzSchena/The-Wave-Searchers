import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailList from "../components/ItemDetail/ItemDetailList";

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

    return <ItemDetailList item={item} />
}



export default ItemDetailContainer;