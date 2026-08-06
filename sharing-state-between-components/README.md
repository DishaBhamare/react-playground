# Sharing State Between Components (Lifting State Up)

This folder contains notes and examples for **Sharing State Between Components** in React, also known as **Lifting State Up**.

---

## 📌 Concepts Covered

- Why components need shared state
- Lifting state up
- Closest common parent
- Parent → Child data flow
- Child → Parent communication
- One source of truth
- Common mistakes
- Real project use cases

---

## 📂 Files

- `example.jsx` → Working example with commented explanations and interview notes

---

## 🚀 Key Idea

When **two or more components need the same data**, move the state to their **closest common parent** and pass it down through props.

```jsx
const [query, setQuery] = useState("");

<SearchBar query={query} setQuery={setQuery} />
<ProductList query={query} />
```

---

## 🔁 Data Flow

### Parent → Child

```jsx
<Child value={value} />
```

### Child → Parent

```jsx
<Child onChange={setValue} />
```

Inside the child:

```jsx
onChange={(e) => onChange(e.target.value)}
```

---

## ⚠️ Common Mistakes

- Keeping duplicate state in parent and child
- Mutating props
- Lifting state higher than necessary

---

## 🎯 Why This Matters

This pattern is used in:

- Search bars + Product lists
- Cart items + Total price
- Filters + Results
- Tabs + Content
- Accordions
- Modals

---

These notes are written in a **simple beginner-friendly style** for quick revision and interview preparation.