import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Cart from './Pages/Cart';
import ShoppingContext from './Context/ShoppingContext';



function App() {
  return (
    <ShoppingContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ShoppingContext>
  );
}

export default App;
