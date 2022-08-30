import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';
import { useEffect, useState} from "react";
 
 
 
 
function App() {
 
  const [products, setProducts] = useState([]);
 
  const bringData = async () => {
    try {
      const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Tabladesurf')
      const data = await response.json();
      setProducts(data.results);
    } catch (e) {
      console.log(e)
    }    
  }
 
  useEffect(()=> {
   bringData();    
  }, [])
 
 
  // console.log (cart)
  console.log(products)
 
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer greeting="OFFSHORE COLL." products = {products} />  
     
     </header>
    
   </div>
 );
}

export default App;