import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/detail/ItemDetailContainer.jsx';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        {/* NAVBAR */}
        <header>
          <NavBar/>
        </header>

        {/* CONTENT */}
        <Routes>
          <Route path='/React/' element={<ItemListContainer />}></Route>
          <Route path='/React/size/:sizeId' element={<ItemListContainer />}></Route>
          <Route path='/React/item/:prodId' element={<ItemDetailContainer />}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}




export default App;
