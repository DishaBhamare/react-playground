# Updating Arrays in State

This folder contains notes and examples for **updating arrays in React state** using immutable patterns.

## 📌 Concepts Covered

- Adding items to an array
- Removing items with `filter()`
- Updating items with `map()`
- Toggling boolean values
- Functional state updates
- Queueing multiple array updates
- Common mutation mistakes

## 📂 Files

- `example.js` → Commented notes and examples

## 🚀 Key Patterns

### Add item

```js
setItems([...items, newItem]);
```

### Remove item

```js
setItems(items.filter(item => item.id !== id));
```

### Update item

```js
setItems(items.map(item =>
  item.id === id ? { ...item, value } : item
));
```

### Toggle boolean

```js
setItems(items.map(item =>
  item.id === id ? { ...item, done: !item.done } : item
));
```

## ⚠️ Avoid Mutation

Do not use methods like:

- `push()`
- `splice()`
- Direct object modification inside arrays

Always create **new arrays and new objects** when updating React state.

## 🎯 Why This Matters

These patterns are used in:

- Todo apps
- Shopping carts
- Wishlists
- Product lists
- Notifications
- MERN stack projects

---

These notes are written in a **simple beginner-friendly style** for quick revision and interview preparation.