import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">🛒</span>
        <h1>ShopEase</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            🏠 Home
          </Link>
        </li>
        <li>
          <Link to="/orders" className={`nav-link ${location.pathname.startsWith('/orders') ? 'active' : ''}`}>
            📦 Orders
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
