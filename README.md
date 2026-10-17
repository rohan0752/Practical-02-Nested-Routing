# Practical 2: Nested Routing

## 📋 Practical Question
**Create an Order Management application for an e-commerce website using nested routing. Create an Orders parent page with Current Orders, Order History, and Cancelled Orders as nested routes.**

## 🎯 Aim & Objectives
- Implement nested routing in React Router
- Use Outlet component for rendering child routes within a parent layout
- Create a parent Orders layout with tabbed navigation
- Display sample order data across three nested sections

## 🛠️ Technologies Used
| Technology | Purpose |
|-----------|---------|
| React 19 | UI library |
| React Router v7 | Routing with nested routes |
| Vite | Build tool |
| JavaScript (JSX) | Language |
| CSS3 | Styling |

## ✨ Features
- **Home Page** — Welcome page with overview of the order management system
- **Orders Layout** — Parent route with tabbed navigation for child routes
- **Current Orders** — Active orders with status (Processing, Shipped, Out for Delivery)
- **Order History** — Past delivered orders with delivery dates
- **Cancelled Orders** — Cancelled orders with reasons and refund status
- **Active Tab Highlight** — Uses NavLink with isActive for styling
- **Smooth Animations** — Page transitions and hover effects

## 📚 React Concepts Demonstrated
1. **Nested Routes** — Child routes defined inside a parent `<Route>` element
2. **Outlet** — Renders the matched child route inside the parent layout
3. **NavLink** — Link component with `isActive` callback for styling active links
4. **Navigate** — Redirect from `/orders` to `/orders/current` using index route
5. **Component composition** — Layout component wrapping child route content

## 🚀 Installation & Run Instructions
```bash
cd Practical-02-Nested-Routing
npm install
npm run dev
```

## 🔨 Build for Production
```bash
npm run build
```

## ⚠️ Limitations
- Sample order data is hardcoded (no real backend)
- Data resets on page refresh

## 🔗 Links
- **GitHub Repository:** *(will be added after publishing)*
- **Netlify Live URL:** *(will be added after deployment)*
