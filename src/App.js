import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Navbar/Banner";
import ItemDetailContainer from "./container/ItemDetailContainer";
import ItemListContainer from "./container/ItemListContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import { ItemProvider } from "./contexts/ItemContext";
import ContactForm from "./components/Form/Form";

function App() {
  return (
    <>
      <ProductsProvider>
        <ItemProvider>
          <CartProvider>
            <BrowserRouter>
              <header className="App-header">
                <Navbar />
                <Banner greeting={"OFFSHORE COLL."} />
              </header>
              <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route
                  path="/detail/:productId"
                  element={<ItemDetailContainer />}
                />
                <Route path="/form" element={<ContactForm />} />
                <Route path="/" element={<ItemListContainer />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </ItemProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
