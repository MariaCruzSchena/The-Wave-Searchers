import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Body/Banner';
import ItemDetailContainer from './container/ItemDetailContainer';
// import ItemListContainer from './container/ItemListContainer';


 
 
function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Banner greeting={"OFFSHORE COLL."} /> 
        {/* <ItemListContainer />    */}
        <ItemDetailContainer />   
     </header>    
   </div>
 );
}

export default App;