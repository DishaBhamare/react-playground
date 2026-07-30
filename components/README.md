# Components

## Overview

A React component is a reusable JavaScript function that returns JSX. Components help break the user interface into small, independent, and reusable pieces.

---

## Concepts Covered

- What is a React component?
- Functional components
- Returning JSX
- Capitalized component names
- Rendering components inside other components
- Exporting components
- Importing components
- Default vs Named exports

---

## Key Takeaways

- Components are regular JavaScript functions.
- Component names must start with a **capital letter**.
- JSX allows us to write markup inside JavaScript.
- Components can be reused multiple times.
- Components can render other components.
- Use `export` and `import` to share components across files.

---

## Default Export

```jsx
export default function Button() {
  return <button>Click</button>;
}
```

Import:

```jsx
import Button from "./Button.js";
```

---

## Named Export

```jsx
export function Button() {
  return <button>Click</button>;
}
```

Import:

```jsx
import { Button } from "./Button.js";
```

---

## Common Mistakes

- Using lowercase component names.
- Forgetting to return JSX.
- Using multiple `export default` statements in the same file.
- Defining components inside other components unnecessarily.

---

## What I Learned

- How to create a functional React component.
- How JSX works inside components.
- How to compose components together.
- The difference between default and named exports.
- How components are imported and reused in other files.

---

## Files

- `examples.jsx` — Practical examples for all component concepts covered in this topic.

This is clean, professional, and perfectly fits your react-playground style.