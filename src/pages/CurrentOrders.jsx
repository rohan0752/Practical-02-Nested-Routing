const currentOrders = [
  { id: 'ORD-2026-001', product: 'Wireless Earbuds Pro', price: '₹2,499', status: 'Processing', date: '2026-10-15', statusColor: '#f59e0b' },
  { id: 'ORD-2026-002', product: 'USB-C Hub Adapter', price: '₹1,299', status: 'Shipped', date: '2026-10-14', statusColor: '#0ea5e9' },
  { id: 'ORD-2026-003', product: 'Mechanical Keyboard', price: '₹3,999', status: 'Out for Delivery', date: '2026-10-13', statusColor: '#22c55e' },
  { id: 'ORD-2026-004', product: 'Laptop Stand', price: '₹1,799', status: 'Processing', date: '2026-10-16', statusColor: '#f59e0b' },
];

function CurrentOrders() {
  return (
    <div className="orders-section">
      <h2>📋 Current Orders</h2>
      <p className="section-desc">Your active orders that are being processed or shipped.</p>
      <div className="orders-list">
        {currentOrders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <span className="order-id">{order.id}</span>
              <span className="order-status" style={{ background: order.statusColor + '22', color: order.statusColor }}>
                {order.status}
              </span>
            </div>
            <h3 className="order-product">{order.product}</h3>
            <div className="order-footer">
              <span className="order-price">{order.price}</span>
              <span className="order-date">Ordered: {order.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentOrders;
