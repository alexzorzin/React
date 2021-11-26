import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      {/* NAVBAR */}
      <header>
        <NavBar />
        </header>
        {/* ITEMLISTCONTAINER */}
        <div>
        <ItemListContainer/>
        </div>

    </div>
  );
}



export default App;
