//================================
// Custom Hooks
//================================

//A custom hook is a reusable JavaScript function that contains React hook logic.
//It is used when the same state + effect + logic is repeated in multiple components.

//--------------------------------
// Why do we need Custom Hooks?
//--------------------------------

//Suppose we write this in many components:

// const [data, setData] = useState([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       setData(data);
//       setLoading(false);
//     });
// }, [url]);

//If this logic is repeated in Products, Users, Orders, etc.
//then we should move it into a custom hook.

//--------------------------------
// Important: Custom Hook does NOT reuse UI
//--------------------------------

//Custom hook → reuses logic
//Component → reuses UI

//Example:
// useFetch()       → logic
// <ProductCard /> → UI

//--------------------------------
// Naming Rule
//--------------------------------

//A custom hook must start with "use".

//Correct
// useFetch
// useToggle
// useAuth

//Wrong
// fetchData
// myHook
// toggleHook

//--------------------------------
// Smallest Custom Hook
//--------------------------------

import { useState, useEffect } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(c => c + 1);
  }

  return { count, increment };
}

//Using the hook

function App() {
  const { count, increment } = useCounter();

  return <button onClick={increment}>{count}</button>;
}

//--------------------------------
// Real Example: useFetch
//--------------------------------

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

//Using the hook

function Products() {
  const { data, loading } = useFetch('/api/products');

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {data.map(product => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}

//--------------------------------
// Where do we write Custom Hooks?
//--------------------------------

//Project structure

// src/
// ├── components/
// ├── pages/
// ├── hooks/
// │   └── useFetch.js
// └── App.jsx

//Reusable hook logic is usually placed inside the hooks folder.

//--------------------------------
// Array vs Object Return (Very Important)
//--------------------------------

//If a function returns an ARRAY:

function usePair() {
  return [1, 2];
}

const [a, b] = usePair();

//Use [] because the returned value is an array.

//--------------------------------

//If a function returns an OBJECT:

function useUser() {
  return { name: 'Disha', age: 22 };
}

const { name, age } = useUser();

//Use {} because the returned value is an object.

//--------------------------------
// Why does useState use [] ?
//--------------------------------

//useState returns an array.

// const result = useState(0);

// result becomes:
// [0, function]

//So we write:

const [count2, setCount2] = useState(0);

//--------------------------------
// Why do most custom hooks return {} ?
//--------------------------------

//Array version

// const [data, loading, error, refetch] = useFetch();

//You must remember the order.

//Object version

// const { data, loading, error, refetch } = useFetch();

//Order does not matter and the code is more readable.

//--------------------------------
// Common Beginner Confusion
//--------------------------------

//Q. If two components use the same custom hook, do they share state?

//Example:

function ComponentA() {
  const { count } = useCounter();
}

function ComponentB() {
  const { count } = useCounter();
}

//Answer: NO.

//Each component gets its own separate state.

//ComponentA → count = 0
//ComponentB → count = 0

//Updating A does not update B.

//--------------------------------
// Then how do we share state?
//--------------------------------

//For shared state use Context.

//Wrong for shared cart state:

// Navbar  → useCart()
// Products → useCart()

//These create separate states.

//Correct:

// <CartProvider>
//   <Navbar />
//   <Products />
// </CartProvider>

//useContext shares state.
//Custom hooks reuse logic.

//--------------------------------
// Can custom hooks return functions?
//--------------------------------

//Yes.

function useToggle() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(o => !o);
  }

  return { open, toggle };
}

//--------------------------------
// Can custom hooks call other hooks?
//--------------------------------

//Yes.

function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auth logic
  }, []);

  return { user };
}

//A custom hook can use:
// useState
// useEffect
// useContext
// useReducer
// other custom hooks

//--------------------------------
// Rules of Hooks still apply
//--------------------------------

//Hooks must be called at the top level.

//Wrong

// if (loggedIn) {
//   useFetch('/api/products');
// }

//Correct

// const result = useFetch('/api/products');

//--------------------------------
// Custom Hook vs Component
//--------------------------------

//Custom Hook
// - Returns data/functions
// - Contains logic
// - No JSX required

//Component
// - Returns JSX
// - Contains UI

//--------------------------------
// When should I create a Custom Hook?
//--------------------------------

//Create one when:
// 1. Same useEffect repeats
// 2. Same useState logic repeats
// 3. Same form logic repeats
// 4. Same localStorage logic repeats
// 5. Same debounce logic repeats

//--------------------------------
// Real-World Examples
//--------------------------------

// useFetch
// useLocalStorage
// useToggle
// useDebounce
// useAuth
// useWindowSize

//--------------------------------
// Interview Questions
//--------------------------------

//Q1. What is a custom hook?
//A reusable function that contains React hook logic.

//Q2. Why must it start with "use"?
//So React can recognize it as a hook and apply the Rules of Hooks.

//Q3. Does a custom hook share state?
//No, each component gets its own state.

//Q4. Can it return functions?
//Yes.

//Q5. Should repeated UI be moved to a custom hook?
//No, move repeated UI to a component.

//--------------------------------
// Quick Revision
//--------------------------------

//Repeated logic?
// → Custom Hook

//Repeated UI?
// → Component

//Need shared state?
// → Context

//Returns array?
// → []

//Returns object?
// → {}

//--------------------------------
// The One Sentence to Remember
//--------------------------------

//A custom hook is a reusable function that contains React hook logic;
//it helps multiple components reuse the same behavior without duplicating code,
//but it does NOT automatically share state between those components.