import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/detail/ItemDetailContainer.jsx';
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart'
import Checkout from './components/Checkout';

function App() {

  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        {/* NAVBAR */}
        <header>
          <NavBar/>
        </header>

        {/* CONTENT */}
        <Routes>
          <Route path='/React/catalogo' element={<ItemListContainer />}></Route>
          <Route path='/React/size/:sizeId' element={<ItemListContainer />}></Route>
          <Route path='/React/item/:prodId' element={<ItemDetailContainer />}></Route>
          <Route path='/React/cart' element={<Cart />}></Route>
          <Route path='/React/checkout' element={<Checkout/>}></Route>
        </Routes>

      </div>
    </BrowserRouter>
    </CartContextProvider>

  );
}




export default App;
