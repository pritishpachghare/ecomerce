import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Product from './component/Product';
import NewProduct from './component/NewProduct';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product' element={<Product />} />
        <Route exact path='/product/:id' element={<NewProduct/>} />
      </Routes>
    </>
  );
}

export default App;
