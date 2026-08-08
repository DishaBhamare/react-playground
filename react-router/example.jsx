import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  Outlet,
  Navigate
} from 'react-router-dom';

//================================
// React Router
//================================

//React Router is used to create multiple pages in a React application
//without reloading the entire browser page.

//Examples:
// /
// /products
// /cart
// /login

//--------------------------------
// Install
//--------------------------------

// npm install react-router-dom

//--------------------------------
// BrowserRouter
//--------------------------------

//BrowserRouter enables routing for the entire application.

//main.jsx

// import { BrowserRouter } from 'react-router-dom';

// <BrowserRouter>
//   <App />
// </BrowserRouter>

//Without BrowserRouter, routing will not work.

//--------------------------------
// Routes and Route
//--------------------------------

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

//path = URL
//element = component to render
//Route maps path to the component

function Home() {
  return <h1>Home Page</h1>;
}

function Products() {
  return <h1>Products Page</h1>;
}

function Cart() {
  return <h1>Cart Page</h1>;
}

//--------------------------------
// Navigation with Link
//--------------------------------

//Use Link instead of normal <a> tags.

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

//--------------------------------
// Why not use <a> ?
//--------------------------------

//Wrong

// <a href="/cart">Cart</a>

//This reloads the whole page.

//Correct

// <Link to="/cart">Cart</Link>

//This changes the page without reloading.

//--------------------------------
// useNavigate
//--------------------------------

//Used to navigate through JavaScript.

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/products');
  }

  return <button onClick={handleLogin}>Login</button>;
}

//Common uses:
//1. After login
//2. After logout
//3. After form submission
//4. Redirect after an action

//--------------------------------
// Dynamic Routes
//--------------------------------

//Example URL:
// /products/101

function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

//:id is a route parameter.


//--------------------------------
// useParams
//--------------------------------

function ProductDetails() {
  const { id } = useParams();

  return <h1>Product ID: {id}</h1>;
}

//If URL is /products/101
//id becomes "101"

//--------------------------------
// Nested Routes
//--------------------------------

function App3() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//--------------------------------
// Outlet
//--------------------------------

//Outlet is the place where child routes are rendered.

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}

function Orders() {
  return <h2>Orders Page</h2>;
}

function Users() {
  return <h2>Users Page</h2>;
}

//--------------------------------
// Protected Route
//--------------------------------

//Used to protect pages that require login.

function ProtectedRoute({ children }) {
  const isLoggedIn = true;

  return isLoggedIn ? children : <Navigate to="/login" />;
}

//Usage

function App4() {
  return (
    <Routes>
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

//--------------------------------
// Navigate Component
//--------------------------------

//Navigate is used for redirection.

function RedirectExample() {
  return <Navigate to="/login" />;
}

//--------------------------------
// Re-render vs Reload
//--------------------------------

//Link and navigate() do NOT reload the browser page.
//React only changes the displayed component.

//--------------------------------
// Common Mistakes
//--------------------------------

//1. Forgetting BrowserRouter
//2. Using <a> instead of <Link>
//3. Writing element={Home} instead of element={<Home />}
//4. Using useParams outside a routed component
//5. Forgetting Outlet for nested routes

//--------------------------------
// Interview Questions
//--------------------------------

//Q1. Why use React Router?
//To navigate between pages without full page reload.

//Q2. Difference between Link and a?
//Link prevents full page reload.

//Q3. What does useNavigate do?
//Programmatic navigation.

//Q4. What does useParams return?
//Route parameters from the URL.

//Q5. What is Outlet used for?
//Rendering child routes.

//Q6. What is a dynamic route?
//A route containing parameters such as :id.

//--------------------------------
// Quick Revision
//--------------------------------

//Enable routing
// <BrowserRouter>

//Define routes
// <Routes>
//   <Route path="/" element={<Home />} />
// </Routes>

//Navigate in UI
// <Link to="/cart">Cart</Link>

//Navigate in code
// navigate('/cart')

//Read params
// const { id } = useParams()

//Render child routes
// <Outlet />

//Redirect
// <Navigate to="/login" />

//--------------------------------
// The One Sentence to Remember
//--------------------------------

//React Router changes which component is shown based on the URL
//while keeping the application on a single page without a full browser reload.

export default App;