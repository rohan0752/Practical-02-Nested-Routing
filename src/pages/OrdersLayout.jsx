import { NavLink, Outlet } from 'react-router-dom';

function OrdersLayout() {
  return (
    <div className="page orders-layout">
      <div className="page-header">
        <h1>📦 My Orders</h1>
        <p className="page-subtitle">Manage and track all your orders</p>
      </div>

      <nav className="orders-nav">
        <NavLink to="current" className={({ isActive }) => `orders-tab ${isActive ? 'active' : ''}`}>
          📋 Current Orders
        </NavLink>
        <NavLink to="history" className={({ isActive }) => `orders-tab ${isActive ? 'active' : ''}`}>
          📜 Order History
        </NavLink>
        <NavLink to="cancelled" className={({ isActive }) => `orders-tab ${isActive ? 'active' : ''}`}>
          ❌ Cancelled Orders
        </NavLink>
      </nav>

      <div className="orders-content">
        {/* The Outlet renders the matched child route */}
        <Outlet />
      </div>

      <div className="outlet-info">
        <p>💡 <strong>How it works:</strong> The content above is rendered using <code>&lt;Outlet /&gt;</code>. This component acts as a placeholder where the matched nested route's component is displayed. The parent layout (tabs + header) stays the same while the content below the tabs changes.</p>
      </div>
    </div>
  );
}

export default OrdersLayout;
