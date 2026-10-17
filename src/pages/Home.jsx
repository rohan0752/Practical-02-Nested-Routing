import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <div className="hero">
        <h1>Welcome to ShopEase</h1>
        <p className="hero-subtitle">Your favorite e-commerce platform. Manage your orders with nested routing.</p>
        <Link to="/orders" className="btn btn-primary">View My Orders →</Link>
      </div>

      <div className="features">
        <div className="feature-card">
          <span className="feature-icon">📋</span>
          <h3>Current Orders</h3>
          <p>Track your active and processing orders in real time.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📜</span>
          <h3>Order History</h3>
          <p>View all your past delivered orders and receipts.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">❌</span>
          <h3>Cancelled Orders</h3>
          <p>Review orders that were cancelled with refund details.</p>
        </div>
      </div>

      <div className="concept-box">
        <h2>🧩 About Nested Routing</h2>
        <p>This practical demonstrates <strong>nested routing</strong> in React Router. The <code>/orders</code> page acts as a <strong>parent layout</strong> with its own navigation. Child routes like <code>/orders/current</code>, <code>/orders/history</code>, and <code>/orders/cancelled</code> render inside the parent using the <code>&lt;Outlet /&gt;</code> component.</p>
      </div>
    </div>
  );
}

export default Home;
