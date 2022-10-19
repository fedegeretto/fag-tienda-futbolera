import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/> 
      <ItemListContainer greeting="Bienvenidos a FAG Tienda Futbolera"/>
    </>

  );
}

export default App;
