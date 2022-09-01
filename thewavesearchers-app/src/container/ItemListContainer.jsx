import ItemList from './../components/Body/ItemList'
import { useEffect, useState} from "react";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
 
    const bringData = async () => {
        try {
        const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=tabladesurf&limit=20')
        const data = await response.json();
        setProducts(data.results);
        } catch (e) {
        console.log(e)
        }    
    }
 
    useEffect(()=> {
    bringData();    
    }, [])   
    console.log(products)

    return (
        <div className="bodyContainer">                              
            <div className='productsContainer'>
                <ItemList products={products}  />
            </div>
        </div>
    );
}
 
export default ItemListContainer;
