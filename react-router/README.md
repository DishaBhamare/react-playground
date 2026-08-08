# React Router

This folder contains notes and examples for **React Router** in React applications.

---

## 📌 Concepts Covered

- What is React Router?
- `BrowserRouter`
- `Routes` and `Route`
- Navigation with `Link`
- `useNavigate`
- Dynamic routes
- `useParams`
- Nested routes
- `Outlet`
- Protected routes
- `Navigate`
- Common mistakes and interview questions

---

## 📂 Files

- `example.jsx` → Working examples with detailed comments and explanations

---

## 🚀 Why React Router?

React Router allows us to create multiple pages in a React application **without reloading the entire browser page**.

### Example URLs

- `/`
- `/products`
- `/cart`
- `/login`

---

## 🧠 Basic Setup

### Enable routing

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

### Define routes

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/cart" element={<Cart />} />
</Routes>
```

---

## 🔗 Navigation

Use `Link` instead of normal anchor tags.

```jsx
<Link to="/cart">Cart</Link>
```

### Why not `<a>`?

- `<a>` reloads the whole page ❌
- `Link` changes the page without reload ✅

---

## 🧭 Programmatic Navigation

Use `useNavigate` when navigation happens in JavaScript.

```jsx
const navigate = useNavigate();

navigate('/products');
```

Common after:
- Login
- Logout
- Form submission
- Successful actions

---

## 🔄 Dynamic Routes

```jsx
<Route path="/products/:id" element={<ProductDetails />} />
```

If the URL is:

```text
/products/101
```

Then:

```jsx
const { id } = useParams();
```

`id` becomes `"101"`.

---

## 🧩 Nested Routes

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="orders" element={<Orders />} />
  <Route path="users" element={<Users />} />
</Route>
```

### Outlet

```jsx
<Outlet />
```

`Outlet` is the place where child routes are rendered.

---

## 🔐 Protected Routes

```jsx
function ProtectedRoute({ children }) {
  return isLoggedIn ? children : <Navigate to="/login" />;
}
```

Used to protect pages that require authentication.

---

## ⚠️ Common Mistakes

- Forgetting `BrowserRouter`
- Using `<a>` instead of `Link`
- Writing `element={Home}` instead of `element={<Home />}`
- Using `useParams` outside a routed component
- Forgetting `Outlet` for nested routes

---

## 🎯 Interview Questions

### What is React Router?
A library for navigation in React applications without full page reload.

### Difference between `Link` and `<a>`?
`Link` performs client-side navigation; `<a>` reloads the page.

### What does `useNavigate` do?
Navigates programmatically.

### What does `useParams` return?
Route parameters from the URL.

### What is `Outlet` used for?
Rendering child routes inside a parent route.

---

## 🧠 Quick Revision

| Goal | Tool |
|------|------|
| Enable routing | `BrowserRouter` |
| Define pages | `Routes` + `Route` |
| Navigate in UI | `Link` |
| Navigate in code | `useNavigate` |
| Read URL params | `useParams` |
| Render child routes | `Outlet` |
| Redirect | `Navigate` |

---

## 💡 Final Memory Trick

- **BrowserRouter** → turn routing on
- **Route** → map URL to component
- **Link** → click navigation
- **useNavigate** → code navigation
- **useParams** → read URL values
- **Outlet** → show child pages

---

## 📖 One Sentence Summary

**React Router changes which component is displayed based on the URL while keeping the application on a single page without a full browser reload.**