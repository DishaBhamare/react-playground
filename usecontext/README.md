# useContext

This folder contains notes and examples for **useContext** in React.

---

## 📌 Concepts Covered

- What is Context?
- Why prop drilling is a problem
- `createContext`
- `Provider`
- `useContext`
- Sharing state and functions
- Default values
- Props vs Context
- Custom Provider pattern
- Common confusions and interview questions

---

## 📂 Files

- `example.jsx` → Working examples with detailed comments and interview notes

---

## 🚀 The Problem: Prop Drilling

When only a deep child needs some data:

```text
App
 └── Layout
      └── Header
           └── Navbar
                └── CartIcon
```

Passing `cartCount` through every level becomes repetitive.

---

## 🧠 The 3-Step Pattern

### 1. Create Context

```jsx
const CartContext = createContext();
```

### 2. Provide Value

```jsx
<CartContext.Provider value={{ cartCount, setCartCount }}>
  <Navbar />
  <Products />
</CartContext.Provider>
```

### 3. Read Value

```jsx
const { cartCount } = useContext(CartContext);
```

---

## 🔄 Sharing State and Functions

A common pattern is to share both the state and its updater:

```jsx
value={{ cartCount, setCartCount }}
```

This allows one component to **read** the value and another component to **update** it.

---

## ⚠️ Default Value vs No Provider

```jsx
const ThemeContext = createContext("light");
```

- No Provider → `useContext(ThemeContext)` returns `"light"`.

```jsx
const ThemeContext = createContext();
```

- No Provider → `undefined`.

---

## 🔍 createContext vs useContext

### `createContext()`
Creates the shared context object.

### `useContext()`
Reads the value from the nearest Provider.

---

## ⚖️ Props vs Context

### Use Props
- Direct or nearby components
- Simple and explicit
- Preferred by default

### Use Context
- Many distant components need the same data
- Avoids prop drilling
- Better for shared app-level state

---

## 🏗️ Custom Provider Pattern

Instead of writing `CartContext.Provider` directly in `App`, create a reusable provider:

```jsx
export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
}
```

Usage:

```jsx
<CartProvider>
  <Navbar />
  <Products />
</CartProvider>
```

---

## ❌ Common Confusions

- `useContext` does **not** create a context.
- `useContext` does **not** store data.
- The **Provider** shares the value.
- Components using the context re-render when the provided value changes.

---

## 🎯 Real-World Use Cases

- Authentication user
- Theme (dark/light)
- Shopping cart
- Language selection
- Notifications

---

## 🧠 Quick Revision

| Goal | Tool |
|------|------|
| Create shared box | `createContext()` |
| Share value | `Provider` |
| Read value | `useContext()` |
| Update value | `setState` from context |

---

## 💡 Final Memory Trick

- **Props** → nearby communication.
- **Context** → shared communication across many levels.

Context is **not a replacement for props**; it is a tool to avoid unnecessary prop forwarding in deep component trees.