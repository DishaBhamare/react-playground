# Controlled Components

This folder contains notes and examples for **Controlled Components in React**.

## 📌 Concepts Covered

- What is a controlled component?
- Managing input values with `useState`
- `value` and `onChange`
- Live preview with state
- Handling multiple inputs
- Dynamic keys with `[e.target.name]`
- Form submission
- `preventDefault()`
- Common mistakes and best practices

## 📂 Files

- `example.js` → Commented notes and examples

## 🚀 Key Patterns

### Single input

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

### Multiple inputs

```jsx
const [form, setForm] = useState({
  name: "",
  email: ""
});

function handleChange(e) {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
}
```

### Form submission

```jsx
function handleSubmit(e) {
  e.preventDefault();
  console.log(form);
}
```

## ⚠️ Common Mistakes

- `value` without `onChange` → read-only input
- Forgetting `value` → uncontrolled input
- Replacing the whole form object
- Not using the spread operator

## 🎯 Why This Matters

Controlled components are used in:

- Login forms
- Registration forms
- Search bars
- Checkout forms
- Profile editing forms
- Contact forms
- Most MERN stack applications

---

These notes are written in a **simple beginner-friendly style** for quick revision and interview preparation.