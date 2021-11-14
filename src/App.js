import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListMenu from './components/ItemList/ItemList';
import ItemList, { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import airforce from './airforce.png';

function App() {
  return (
    <div className="App overflow-hidden">
      {/* NAVBAR */}
      <header>
        <NavBar />
        <div className="row text-uppercase ms-5">
        <ItemListMenu item="Nike" />
        <ItemListMenu item="Adidas" />
        <ItemListMenu item="Puma" />
        <ItemListMenu item="Reebook" />
        <ItemListMenu item="Zara" />
        <ItemListMenu item="Vans" />
        <ItemListMenu item="Crocs" />
        </div>
      </header>
      {/* CONTENIDO */}
      <div className="content text-uppercase">
        <img src={airforce} className="w-25" />
        <ItemList item='Compra las AirForce One a un precio espectacular'/>
      </div>
    </div>

  );
}

export default App;
