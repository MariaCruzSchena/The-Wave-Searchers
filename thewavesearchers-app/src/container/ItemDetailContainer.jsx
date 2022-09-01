import { useEffect, useState} from "react";
import ItemDetail from "../components/Body/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    
    const getItem = async () => {
        try {
        const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=tabladesurf&limit=20')
        const data = await response.json();
        setItem(data.results[15]);
        } catch (e) {
        console.log(e)
        }    
    }

    useEffect(()=> {
        setTimeout(() => {
            getItem();
        }, 2000);       
    }, [])   
    console.log(item)

    return  <ItemDetail item={item} />    
    

}



export default ItemDetailContainer;