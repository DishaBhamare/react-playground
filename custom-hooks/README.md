# Custom Hooks

This folder contains notes and examples for **Custom Hooks** in React.

---

## 📌 Concepts Covered

- What is a custom hook?
- Why custom hooks are needed
- Reusing logic vs reusing UI
- Naming rules
- `useFetch` example
- Array vs object return values
- Why `useState` uses `[]`
- Why custom hooks often use `{}`
- Do custom hooks share state?
- Custom hooks vs Context
- Rules of Hooks
- Real-world examples
- Interview questions

---

## 📂 Files

- `example.js` → Detailed examples with explanations and common beginner confusions

---

# 🚀 What is a Custom Hook?

A **custom hook is a reusable JavaScript function that contains React hook logic**.

It is used when the same **state + effect + logic** is repeated in multiple components.

---

# ❓ Why do we need it?

Suppose the same fetching logic appears in many components:

```jsx
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      setData(data);
      setLoading(false);
    });
}, [url]);
```

If this is repeated in **Products, Users, Orders**, etc., create a custom hook.

---

# 🧠 The Most Important Confusion

## Custom Hook ≠ Reusable UI

### Custom Hook
- Reuses **logic**
- Returns **data/functions**

### Component
- Reuses **UI**
- Returns **JSX**

| Goal | Use |
|---|---|
| Reuse fetching logic | Custom Hook |
| Reuse ProductCard UI | Component |

---

# ✨ Naming Rule

A custom hook **must start with `use`**.

### ✅ Correct

```js
useFetch
useToggle
useAuth
```

### ❌ Wrong

```js
fetchData
myHook
toggleHook
```

---

# 🪝 Smallest Custom Hook

```jsx
function useCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(c => c + 1);
  }

  return { count, increment };
}
```

Use it:

```jsx
const { count, increment } = useCounter();
```

---

# 🌐 Real Example: useFetch

```jsx
function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const json = await res.json();

      setData(json);
      setLoading(false);
    }

    fetchData();
  }, [url]);

  return { data, loading };
}
```

Use it:

```jsx
const { data, loading } = useFetch('/api/products');
```

---

# 📁 Where do we write custom hooks?

Recommended structure:

```text
src/
├── components/
├── pages/
├── hooks/
│   └── useFetch.js
└── App.jsx
```

Put reusable hook logic inside the **hooks** folder.

---

# 🔄 Array vs Object Return (Very Important)

## If a function returns an ARRAY

```js
function usePair() {
  return [1, 2];
}

const [a, b] = usePair();
```

Use **[]**.

---

## If a function returns an OBJECT

```js
function useUser() {
  return { name: 'Disha', age: 22 };
}

const { name, age } = useUser();
```

Use **{}**.

---

# 🤔 Why does useState use []?

Because `useState` returns an array:

```js
const result = useState(0);

// result = [0, function]
```

So we write:

```js
const [count, setCount] = useState(0);
```

---

# 🤔 Why do most custom hooks return {}?

### Array version

```js
const [data, loading, error, refetch] = useFetch();
```

You must remember the order.

### Object version

```js
const { data, loading, error, refetch } = useFetch();
```

More readable, and order does not matter.

---

# ⚠️ Biggest Beginner Confusion

## Do custom hooks share state?

**No.**

```jsx
function A() {
  const { count } = useCounter();
}

function B() {
  const { count } = useCounter();
}
```

These are **separate states**.

- A → count = 0
- B → count = 0

Updating A does not update B.

---

# 🔗 Then how do we share state?

Use **Context**.

### ❌ Wrong for shared cart

```jsx
Navbar   -> useCart()
Products -> useCart()
```

Separate states.

### ✅ Correct

```jsx
<CartProvider>
  <Navbar />
  <Products />
</CartProvider>
```

- **Custom Hook** → reuse logic
- **Context** → share state

---

# ⚙️ Can custom hooks return functions?

Yes.

```jsx
function useToggle() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(o => !o);
  }

  return { open, toggle };
}
```

---

# 🔁 Can custom hooks call other hooks?

Yes.

They can use:

- `useState`
- `useEffect`
- `useContext`
- `useReducer`
- other custom hooks

---

# 🚫 Rules of Hooks Still Apply

### ❌ Wrong

```jsx
if (loggedIn) {
  useFetch('/api/products');
}
```

### ✅ Correct

```jsx
const result = useFetch('/api/products');
```

Hooks must be called at the **top level**.

---

# 🆚 Custom Hook vs Component

| Feature | Custom Hook | Component |
|---|---|---|
| Returns JSX | ❌ | ✅ |
| Contains logic | ✅ | ✅ |
| Reuses UI | ❌ | ✅ |
| Reuses hook logic | ✅ | ❌ |

---

# 📌 When should I create a custom hook?

Create one when the same logic is repeated **2 or more times**.

Examples:

- `useFetch`
- `useLocalStorage`
- `useToggle`
- `useDebounce`
- `useAuth`
- `useWindowSize`

---

# 🎯 Interview Questions

### What is a custom hook?
A reusable function that contains React hook logic.

### Why must it start with `use`?
So React can recognize it as a hook and apply the Rules of Hooks.

### Does a custom hook share state?
No, each component gets its own state.

### Can it return functions?
Yes.

### Should repeated UI be moved to a custom hook?
No, move repeated UI to a component.

---

# ⚡ Quick Revision

| Situation | Use |
|---|---|
| Repeated logic | Custom Hook |
| Repeated UI | Component |
| Shared state | Context |
| Function returns array | `[]` |
| Function returns object | `{}` |

---

# 💡 Final Memory Trick

- **Logic repeats** → Custom Hook
- **UI repeats** → Component
- **State must be shared** → Context

---

# 🧾 One Sentence Summary

**A custom hook is a reusable function that contains React hook logic, allowing multiple components to reuse the same behavior without duplicating code, but it does not automatically share state between those components.**