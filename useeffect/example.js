import { useState, useEffect } from 'react';

//================================
// useEffect
//================================

//useEffect is a React hook used to run side effects after rendering.
//Examples of side effects:
//1. Fetching data from an API
//2. Saving data to localStorage
//3. Starting timers
//4. Adding event listeners
//5. Cleanup when a component is removed

//--------------------------------
// Basic Syntax
//--------------------------------

useEffect(() => {
    //side effect code
});

//This runs after every render.

//--------------------------------
// Run only once
//--------------------------------

useEffect(() => {
    console.log('Component mounted');
}, []);

//[] is called the dependency array.
//Empty dependency array means the effect runs only once when the component first appears.

//--------------------------------
// Run when a value changes
//--------------------------------

const [count, setCount] = useState(0);

useEffect(() => {
    console.log('Count changed:', count);
}, [count]);

//This runs on first render and whenever count changes.

//--------------------------------
// Multiple dependencies
//--------------------------------

const [name, setName] = useState('');
const [age, setAge] = useState(0);

useEffect(() => {
    console.log('Name or age changed');
}, [name, age]);

//Runs when either name or age changes.

//--------------------------------
// Fetching data
//--------------------------------

function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return <div>{products.length}</div>;
}

//Flow:
//Render -> useEffect runs -> fetch data -> setProducts -> re-render

//--------------------------------
// Why not fetch directly?
//--------------------------------

//Wrong

// function ProductsPage() {
//     fetch('/api/products');
//     return <div />;
// }

//Component functions run on every render.
//Direct fetch can cause repeated API calls.

//--------------------------------
// Re-render vs Reload
//--------------------------------

//Re-render:
//React runs the component again and updates only the changed UI.

//Reload:
//The entire browser page refreshes and all React state is lost.

//--------------------------------
// Refetch after an action
//--------------------------------

async function deleteProduct(id) {
    await fetch(`/api/products/${id}`, {
        method: 'DELETE'
    });

    //fetch updated data again
    fetchProducts();
}

//This updates the UI without reloading the page.

//--------------------------------
// Cleanup Function
//--------------------------------

useEffect(() => {
    const id = setInterval(() => {
        console.log('tick');
    }, 1000);

    return () => {
        clearInterval(id);
    };
}, []);

//The returned function is called when the component is removed.

//--------------------------------
// Common cleanup examples
//--------------------------------

// clearInterval(id)
// clearTimeout(id)
// removeEventListener(...)
// unsubscribe()

//--------------------------------
// Infinite loop example
//--------------------------------

//Wrong

// useEffect(() => {
//     setCount(count + 1);
// }, [count]);

//Flow:
//count changes -> effect runs -> setCount -> count changes again -> effect runs again

//--------------------------------
// Correct version
//--------------------------------

useEffect(() => {
    setCount(c => c + 1);
}, []);

//Runs only once, so final count becomes 1.

//--------------------------------
// Dependency Array Summary
//--------------------------------

// No array      -> runs after every render
// []            -> runs only once
// [count]       -> runs when count changes
// [a, b]        -> runs when a or b changes

//--------------------------------
// Important Rule
//--------------------------------

//If code talks to something outside React,
//it usually belongs in useEffect.

//Examples:
//API, localStorage, timers, event listeners

//--------------------------------
// Common Mistakes
//--------------------------------

//1. Forgetting dependencies
//2. Putting fetch directly in component body
//3. Creating infinite loops
//4. Forgetting cleanup
//5. Using useEffect for simple calculations

//--------------------------------
// Do not use useEffect for this
//--------------------------------

//Wrong

const total = 100 * 2;

//No effect needed because this is a normal calculation.

//--------------------------------
// Interview Questions
//--------------------------------

//Q1. What is useEffect?
//A hook used to run side effects after rendering.

//Q2. What does [] mean?
//Run only once when the component mounts.

//Q3. What does [count] mean?
//Run whenever count changes.

//Q4. What is cleanup?
//Code that removes timers, listeners, or subscriptions.

//Q5. What causes a re-render?
//State or props changing.

//Q6. Does useEffect cause re-render?
//No. Updating state inside the effect can cause a re-render.

//--------------------------------
// Quick Revision
//--------------------------------

//Run once
useEffect(() => {}, []);

//Run when count changes
useEffect(() => {}, [count]);

//Run always
useEffect(() => {});

//Cleanup
useEffect(() => {
    return () => {};
}, []);

//useEffect helps us run side-effect code at the correct time
//without reloading the page.