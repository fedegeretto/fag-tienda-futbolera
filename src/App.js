import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route 
          path='/' 
          element={<ItemListContainer greeting="Bienvenidos a FAG Tienda Futbolera"/>}
        />
        <Route
          path='/categoria/:categoryName' element={<ItemListContainer/>}
        />
        <Route
          path='/detail/:idProd'
          element={<ItemDetailContainer/>}
        />
        <Route
          path='/cart'
          element={<Cart/>}
        /> 
      </Routes>  
    </BrowserRouter>

  );
}

export default App;
