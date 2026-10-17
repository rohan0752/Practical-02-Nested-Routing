const orderHistory = [
  { id: 'ORD-2026-101', product: 'React JS Book', price: '₹599', status: 'Delivered', date: '2026-09-20', deliveredOn: '2026-09-25' },
  { id: 'ORD-2026-102', product: 'Bluetooth Mouse', price: '₹899', status: 'Delivered', date: '2026-09-10', deliveredOn: '2026-09-14' },
  { id: 'ORD-2026-103', product: 'Monitor Light Bar', price: '₹2,199', status: 'Delivered', date: '2026-08-28', deliveredOn: '2026-09-02' },
  { id: 'ORD-2026-104', product: 'Phone Case', price: '₹349', status: 'Delivered', date: '2026-08-15', deliveredOn: '2026-08-19' },
  { id: 'ORD-2026-105', product: 'Webcam HD', price: '₹1,499', status: 'Delivered', date: '2026-07-30', deliveredOn: '2026-08-04' },
];

function OrderHistory() {
  return (
    <div className="orders-section">
      <h2>📜 Order History</h2>
      <p className="section-desc">All your past orders that have been delivered successfully.</p>
      <div className="orders-list">
        {orderHistory.map((order) => (
          <div key={order.id} className="order-card delivered">
            <div className="order-header">
              <span className="order-id">{order.id}</span>
              <span className="order-status" style={{ background: '#22c55e22', color: '#22c55e' }}>
                ✓ {order.status}
              </span>
            </div>
            <h3 className="order-product">{order.product}</h3>
            <div className="order-footer">
              <span className="order-price">{order.price}</span>
              <span className="order-date">Delivered: {order.deliveredOn}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
