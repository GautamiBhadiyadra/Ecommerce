import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route, useLocation } from "react-router-dom"
import ShopHome from './Components/Shop/ShopHome';
import BlogHome from './Blog/BlogHome';
import ContactHome from './Contact/ContactHome';
import ShoppingBagHome from './Components/Shop/ShoppingBag/ShoppingBagHome';
import ViewMore from './Components/Shop/ProductDetail/ViewMore';
import CheckOutHome from './Components/Shop/Checkout/CheckOutHome';
import Login from './Components/Common/Login';
import Register from './Components/Common/Register';
import SingIn from './Components/Common/SingIn';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Check for token in local storage when the component mounts
    const token = localStorage.getItem('token');
    if (!token && location.pathname !== '/singin') {
      window.location.href = '/singin';
    }
  }, [location.pathname]);

  const tokens = localStorage.getItem('token');
  console.log("tokens", tokens)
  return (
    <div>
      <Routes>
        {
          tokens && (
            <>
              <Route path="/shop" element={<ShopHome />} />
              <Route path="/blog" element={<BlogHome />} />
              <Route path="/contact" element={<ContactHome />} />
              <Route path="/shoppingbag" element={<ShoppingBagHome />} />
              <Route path="/checkout" element={<CheckOutHome />} />
              <Route path="/" element={<Home />} />
              <Route path="/viewmore" element={<ViewMore />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )
        }
        <Route path="/singin" element={<SingIn />} />
      </Routes>
    </div>
  );
}

export default App;
