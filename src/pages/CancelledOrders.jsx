const cancelledOrders = [
  { id: 'ORD-2026-201', product: 'Gaming Headset', price: '₹4,999', reason: 'Changed my mind', cancelledOn: '2026-10-01', refund: 'Refunded' },
  { id: 'ORD-2026-202', product: 'Desk Organizer', price: '₹799', reason: 'Found cheaper alternative', cancelledOn: '2026-09-18', refund: 'Refunded' },
  { id: 'ORD-2026-203', product: 'Smart Watch', price: '₹8,999', reason: 'Delivery delayed', cancelledOn: '2026-08-22', refund: 'Refund Processing' },
];

function CancelledOrders() {
  return (
    <div className="orders-section">
      <h2>❌ Cancelled Orders</h2>
      <p className="section-desc">Orders that were cancelled along with refund status.</p>
      <div className="orders-list">
        {cancelledOrders.map((order) => (
          <div key={order.id} className="order-card cancelled">
            <div className="order-header">
              <span className="order-id">{order.id}</span>
              <span className="order-status" style={{ background: '#ef444422', color: '#ef4444' }}>
                Cancelled
              </span>
            </div>
            <h3 className="order-product">{order.product}</h3>
            <p className="cancel-reason">Reason: {order.reason}</p>
            <div className="order-footer">
              <span className="order-price">{order.price}</span>
              <span className="order-date refund-status" style={{ color: order.refund === 'Refunded' ? '#22c55e' : '#f59e0b' }}>
                💰 {order.refund}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CancelledOrders;
