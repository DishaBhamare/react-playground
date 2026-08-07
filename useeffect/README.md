# useEffect

This folder contains notes and examples for **useEffect** in React.

---

## 📌 Concepts Covered

- What is a side effect?
- Basic `useEffect`
- Dependency array
- Run once with `[]`
- Run when a value changes
- Fetching API data
- Cleanup function
- Re-render vs reload
- Infinite loops
- Common mistakes

---

## 📂 Files

- `example.jsx` → Working examples with commented explanations and interview notes

---

## 🚀 Most Important Patterns

### Run once

```jsx
useEffect(() => {
  fetchProducts();
}, []);
```

### Run when a value changes

```jsx
useEffect(() => {
  searchProducts(query);
}, [query]);
```

### Run after every render

```jsx
useEffect(() => {
  console.log("rendered");
});
```

### Cleanup

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(id);
}, []);
```

---

## 🔄 Re-render vs Reload

### Re-render
- React runs the component again.
- Only the changed UI is updated.
- State is preserved.

### Reload
- The whole browser page refreshes.
- State is lost.

---

## ⚠️ Common Mistakes

- Fetching directly inside the component body
- Forgetting dependencies
- Creating infinite loops
- Forgetting cleanup
- Using `useEffect` for simple calculations

---

## 🎯 Why This Matters

`useEffect` is used in:

- Product pages
- Search features
- Authentication checks
- Timers and countdowns
- Local storage sync
- Event listeners
- Real-world MERN applications

---

## 🧠 Quick Revision

| Goal | Dependency |
|------|------------|
| Fetch on page load | `[]` |
| React to search text | `[query]` |
| React to count | `[count]` |
| Run on every render | No array |

---

These notes are written in a **simple beginner-friendly style** for quick revision and interview preparation.