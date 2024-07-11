import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './pages/Aboutus';
import Cart from './pages/Cart';
import Contactus from './pages/Contactus';
import Login from './pages/Login';
import OrderConfirmation from './pages/OrderConfirmation';
import PlaceOrder from './pages/PlaceOrder';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Signup from './pages/Signup';


//arrow function
const  App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/products/:id" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/placeorder" element={<PlaceOrder/>}/>
      <Route path="/confirmorder" element={<OrderConfirmation/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contactus/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<Aboutus/>}/>
    </Routes>
  );
}

export default App;
