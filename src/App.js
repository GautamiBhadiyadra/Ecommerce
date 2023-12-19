import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom"
import ShopHome from './Components/Shop/ShopHome';
import BlogHome from './Blog/BlogHome';
import ContactHome from './Contact/ContactHome';

import ShoppingBagHome from './Components/Shop/ShoppingBag/ShoppingBagHome';

import ViewMore from './Components/Shop/ProductDetail/ViewMore';
import CheckOutHome from './Components/Shop/Checkout/CheckOutHome';
import Login from './Components/Common/Login';
import Register from './Components/Common/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Shop" element={<ShopHome />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/contact" element={<ContactHome />} />
        <Route path="/shoppingbag" element={<ShoppingBagHome />} />
        <Route path="/checkout" element={<CheckOutHome />} />
        <Route path="/viewmore" element={<ViewMore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


      </Routes>
    </div>
  );
}

export default App;
