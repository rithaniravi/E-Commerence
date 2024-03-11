import Navbar from './components/navbar';
import './App.css';
import Home from './pages/Home';
import Footer from './components/footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Details from './pages/productdetails';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/cart';

function App() {
  const [cartitem,setCartitem]=useState([])
  return (
    <div className="App">
      
      <BrowserRouter>
      <ToastContainer theme='dark' position='top-center' />
      <Navbar cartitem={cartitem}/>
        <div>
        <Routes>
            <Route path='/'       element={<Home/>}></Route>
            <Route path='/search' element={<Home/>}></Route>
            <Route path='/product/:id' element={<Details cartitem={cartitem} setCartitem={setCartitem}/>}></Route>
            <Route path='/cart' element={<Cart cartitem={cartitem} setCartitem={setCartitem}/>}></Route>
           
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>

      
     
    </div>
  );
}

export default App;
