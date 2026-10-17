import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OrdersLayout from './pages/OrdersLayout';
import CurrentOrders from './pages/CurrentOrders';
import OrderHistory from './pages/OrderHistory';
import CancelledOrders from './pages/CancelledOrders';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<OrdersLayout />}>
              <Route index element={<Navigate to="current" replace />} />
              <Route path="current" element={<CurrentOrders />} />
              <Route path="history" element={<OrderHistory />} />
              <Route path="cancelled" element={<CancelledOrders />} />
            </Route>
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2026 E-Commerce Orders — BCA Practical 2</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
