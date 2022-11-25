import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Form from './components/Form/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './context/CartContext';



function App() {

  // SEGUIR CLASE 10 - MINUTO 59:10
  
  return (
    <BrowserRouter>
    <CartProvider>
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
        <Route
          path='/checkout'
          element={<Form/>}
        /> 
      </Routes>  
    </CartProvider> 
    </BrowserRouter>

  );
}

export default App;
