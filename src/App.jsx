import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './user/Register';
import Dashboard from './user/Dashboard';
import Order from "./user/Order";
import Wishlist from './user/Wishlist';
import Builder from './user/Builder';
import Catalog from './user/Catalog';
import Checkout from './user/Checkout';
import Contactsupport from './user/Contactsupport';
import Profile from './user/Profile';
import Forgotpassword from './pages/Forgotpassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Automatically redirects root '/' to your login page */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        
        {/* Your authentication routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order" element={<Order />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/support" element={<Contactsupport />} />
        <Route path="/profile" element={<Profile />} />
        
        {/* Added Checkout Route */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
