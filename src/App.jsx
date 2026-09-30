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

// Import Admin components, guard, and pages
import AdminDashboard from './admin/AdminDashboard';  
import AdminOrders from './admin/Adminorders';
import AdminSupport from './admin/AdminSupport';
import AdminProducts from './admin/AdminProducts';
import AdminRoute from './components/AdminRoute';

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
        
        {/* Regular User Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order" element={<Order />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/support" element={<Contactsupport />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Protected Admin Routes */}
        <Route 
          path="/admin" 
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          } 
        />
        <Route 
          path="/admin/orders" 
          element={
            <AdminRoute>
              <AdminOrders />
            </AdminRoute>
          } 
        />
        <Route 
          path="/admin/support" 
          element={
            <AdminRoute>
              <AdminSupport />
            </AdminRoute>
          } 
        />
        <Route 
          path="/admin/products" 
          element={
            <AdminRoute>
              <AdminProducts />
            </AdminRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;