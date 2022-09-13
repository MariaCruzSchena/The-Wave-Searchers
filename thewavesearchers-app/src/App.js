import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Navbar/Banner';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer';
import Cart from './container/Cart'
import {BrowserRouter, Routes, Route} from 'react-router-dom';


 
 
function App() {  
  return (
    <>
      <BrowserRouter>
        <header className="App-header">
          <Navbar categoria1={"Torq"} categoria2={"Soft"} categoria3={"Bodyboard"}/>
          <Banner greeting={"OFFSHORE COLL."} />     
        </header>  

        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:productId"  element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId"  element={<ItemListContainer />} />
          <Route path="/"  element={<ItemListContainer />} />          
      
        </Routes>
      </BrowserRouter>    
    </>
 );
}

export default App;