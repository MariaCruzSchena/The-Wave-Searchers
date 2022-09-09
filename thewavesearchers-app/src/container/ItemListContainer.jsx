import ItemList from './../components/Body/ItemList'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    const bringData = async () => {
        try {
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=tabladesurf&limit=20')
            const data = await response.json();
            if (categoryId){
                setProducts(data.results.filter((el)=> el.title.includes(categoryId)));
                console.log(products)
            } else {
            setProducts(data.results)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        bringData();
    }, [])
    console.log(products)

   
    return (
        < div className = "bodyContainer" >
            <div className='productsContainer'>
                <ItemList products={products} />
            </div>
        </div>
    )
    
        
        
            
        
}

export default ItemListContainer;
