import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Item } from './helpers/Item';

function App() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    Item
      .then(data => {
        console.log('llamo a la api de productos')
        setProducts(data)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="App">
      {/* NAVBAR */}
      <header>
        <NavBar />
      </header>
      {loading ? <h1>Espere por favor...</h1> : products.map(prod => <div key={prod.id} className="card w-50 mt-5 mb-5 container" >
        <div className="card-header">
          {prod.name}
        </div>
        <div className="card-body">
          <img className="img-fluid w-25" src={prod.img} alt="foto" />
          <div>
            {'$' + prod.price}
          </div>
        </div>
        <div className="card-footer">

          <button className="btn btn-outline-primary btn-block">
            Comprar
          </button>

        </div>

      </div>
      )}
    </div>
  );
}



export default App;
