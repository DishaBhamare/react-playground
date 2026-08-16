import { useState, useEffect } from 'react';

//================================
// useEffect
//================================

// useEffect is a React Hook used to run side effects after rendering.

// Side effects are operations that interact with something outside
// React's normal rendering process.

// Examples:
// 1. Fetching data from an API
// 2. Saving/syncing data with localStorage
// 3. Starting timers
// 4. Adding event listeners
// 5. Subscribing to something
// 6. Changing browser APIs such as document.title
// 7. Cleaning up timers, listeners, subscriptions, etc.

//================================
// Why do we need useEffect?
//================================

// IMPORTANT:
// Many things can be done WITHOUT useEffect.
//
// For example, we can directly store count in localStorage:
//
// function increase() {
//     setCount(count + 1);
//     localStorage.setItem('count', count + 1);
// }
//
// So useEffect is NOT required just because we are using
// localStorage or an API.
//
// The benefit of useEffect is that it can automatically
// synchronize a side effect whenever a state/prop changes.
//
// Example:
//
// Suppose count can be changed from 5 different places.
//
// Without useEffect:
// Every place that changes count must also remember
// to update localStorage.
//
// With useEffect:
//
// useEffect(() => {
//     localStorage.setItem('count', count);
// }, [count]);
//
// Now whenever count changes:
//
// count changes
//      ↓
// React re-renders
//      ↓
// useEffect runs
//      ↓
// localStorage gets the latest count
//
// We write this synchronization logic only once.

//================================
// useEffect is NOT a replacement
// for event handlers
//================================

// If something should happen because the USER performed
// a specific action, an event handler is usually appropriate.
//
// Example:
//
// <button onClick={searchCity}>Search</button>
//
// function searchCity() {
//     fetch(...);
// }
//
// Flow:
//
// User clicks Search
//      ↓
// onClick
//      ↓
// searchCity()
//      ↓
// fetch()
//
// We do NOT need useEffect here just because fetch()
// is being used.

//================================
// Basic Syntax
//================================

// useEffect(() => {
//     // side effect code
// });
//
// No dependency array means:
// The effect runs after every render.

//================================
// Run only on mount
//================================

// useEffect(() => {
//     console.log('Component mounted');
// }, []);
//
// [] is called the dependency array.
//
// Empty dependency array means:
// The effect has no dependencies.
//
// It runs when the component mounts.
//
// State changes do NOT make this effect run again.
//
// NOTE:
// In React development mode, StrictMode can intentionally
// run effects more than once to detect side-effect problems.

//================================
// Run when a value changes
//================================

// const [count, setCount] = useState(0);
//
// useEffect(() => {
//     console.log('Count changed:', count);
// }, [count]);
//
// This runs:
// 1. On the initial render
// 2. Whenever count changes
//
// Example:
//
// Initial render
//      ↓
// Effect runs
//
// count changes to 1
//      ↓
// Effect runs
//
// count changes to 2
//      ↓
// Effect runs

//================================
// Multiple dependencies
//================================

// const [name, setName] = useState('');
// const [age, setAge] = useState(0);
//
// useEffect(() => {
//     console.log('Name or age changed');
// }, [name, age]);
//
// Runs when either name OR age changes.
//
// name changes ──┐
//                ├──→ useEffect runs
// age changes ───┘

//================================
// Dependency Array Summary
//================================

// No array
// → Runs after every render
//
// []
// → Runs on initial mount
//
// [count]
// → Runs on initial mount + whenever count changes
//
// [count, name]
// → Runs on initial mount + whenever count OR name changes

//================================
// What is a re-render?
//================================

// Re-render means React runs the component function again
// and updates the required UI.
//
// Example:
//
// setCount(count + 1);
//
// Flow:
//
// State changes
//      ↓
// React re-renders component
//      ↓
// UI updates
//
// A re-render is NOT the same as a browser reload.

//================================
// Re-render vs Reload
//================================

// Re-render:
//
// State changes
//      ↓
// React runs component again
//      ↓
// React updates the necessary UI
//
// React state is preserved.
//
// Reload:
//
// Browser refreshes
//      ↓
// Entire page loads again
//      ↓
// React starts again
//      ↓
// Normal React state is lost

//================================
// Fetching data with useEffect
//================================

// Example:
//
// function ProductsPage() {
//     const [products, setProducts] = useState([]);
//
//     useEffect(() => {
//         fetch('/api/products')
//             .then(res => res.json())
//             .then(data => setProducts(data));
//     }, []);
//
//     return <div>{products.length}</div>;
// }
//
// Flow:
//
// Component renders
//      ↓
// useEffect runs
//      ↓
// fetch API
//      ↓
// Data received
//      ↓
// setProducts(data)
//      ↓
// Component re-renders
//      ↓
// Products appear
//
// Because dependency array is [],
// the re-render caused by setProducts does NOT
// run this effect again.

//================================
// Why not fetch directly?
//================================

// WRONG:
//
// function ProductsPage() {
//     fetch('/api/products');
//     return <div />;
// }
//
// Component functions can run again whenever React re-renders.
//
// Flow:
//
// Component renders
//      ↓
// fetch()
//
// State changes
//      ↓
// Component renders again
//      ↓
// fetch() again
//
// This can cause repeated/unwanted API requests.
//
// Therefore, side effects such as this should be placed
// in useEffect when they need to run based on the component lifecycle.

//================================
// useEffect does NOT mean API call
//================================

// Do NOT memorize:
//
// useEffect = API call
//
// API calls are only ONE example of a side effect.
//
// Other examples:
//
// API
// localStorage
// Timer
// Event listener
// Subscription
// Browser APIs

//================================
// Cleanup Function
//================================

// Sometimes an effect STARTS something that needs
// to be STOPPED later.
//
// Example:
//
// useEffect(() => {
//     const id = setInterval(() => {
//         console.log('tick');
//     }, 1000);
//
//     return () => {
//         clearInterval(id);
//     };
// }, []);
//
// The function returned from useEffect is called
// the cleanup function.
//
// Start:
// setInterval()
//
// Cleanup:
// clearInterval()

//================================
// Why do we need cleanup?
//================================

// If we start a timer:
//
// setInterval(...)
//
// the timer can continue running even when the
// component is no longer needed.
//
// Cleanup stops it when the effect is no longer needed.
//
// Flow:
//
// Component appears
//      ↓
// useEffect runs
//      ↓
// Timer starts
//      ↓
// Component exists
//      ↓
// Component is removed
//      ↓
// Cleanup runs
//      ↓
// clearInterval()
//      ↓
// Timer stops

//================================
// Cleanup does NOT stop immediately
//================================

// Common doubt:
//
// "I added clearInterval(), so why is the timer
// still running every second?"
//
// Because cleanup does NOT run immediately.
//
// The interval should continue running while
// the component is active.
//
// Cleanup runs when the effect needs to be cleaned up.
//
// Example:
//
// useEffect(() => {
//     const id = setInterval(() => {
//         console.log('Hello');
//     }, 1000);
//
//     return () => {
//         clearInterval(id);
//     };
// }, []);
//
// Hello will continue printing every second
// while the component is mounted.
//
// When the component is removed:
// clearInterval(id) runs
// and Hello stops.

//================================
// When does cleanup run?
//================================

// Cleanup commonly runs in two situations:
//
// 1. When the component is unmounted/removed
// 2. Before the effect runs again because a dependency changed

//================================
// Cleanup when component is removed
//================================

// Example:
//
// function Timer() {
//     useEffect(() => {
//         const id = setInterval(() => {
//             console.log('Hello');
//         }, 1000);
//
//         return () => {
//             clearInterval(id);
//             console.log('Timer cleaned up');
//         };
//     }, []);
//
//     return <h2>Timer is running...</h2>;
// }
//
// When Timer is displayed:
//
// Hello
// Hello
// Hello
// ...
//
// When Timer component is removed:
//
// Timer cleaned up
//
// Then Hello stops printing.

//================================
// Cleanup when dependency changes
//================================

// Example:
//
// useEffect(() => {
//     console.log('Effect started');
//
//     return () => {
//         console.log('Cleanup');
//     };
// }, [count]);
//
// When count changes:
//
// count changes
//      ↓
// Cleanup from previous effect
//      ↓
// New effect runs
//
// So cleanup is NOT only for component removal.

//================================
// Infinite Loop Example
//================================

// WRONG:
//
// useEffect(() => {
//     setCount(count + 1);
// }, [count]);
//
// Why is this an infinite loop?
//
// count changes
//      ↓
// effect runs
//      ↓
// setCount()
//      ↓
// count changes again
//      ↓
// effect runs again
//      ↓
// setCount()
//      ↓
// ...

// The effect is changing the same value
// that it is watching.

//================================
// Correct version
//================================

// useEffect(() => {
//     setCount(c => c + 1);
// }, []);
//
// Because [] has no dependencies,
// this effect does not run again just because count changes.
//
// Flow:
//
// Component mounts
//      ↓
// Effect runs
//      ↓
// count increases once
//      ↓
// Component re-renders
//      ↓
// Effect does NOT run again

//================================
// Do not use useEffect for
// simple calculations
//================================

// WRONG:
//
// useEffect(() => {
//     const total = 100 * 2;
// }, []);
//
// If it is only a normal calculation,
// use normal JavaScript.
//
// CORRECT:
//
// const total = 100 * 2;
//
// No useEffect is needed.

//================================
// Important Rule
//================================

// Think:
//
// "Does this code need to synchronize React
// with something outside React?"
//
// If yes:
// useEffect may be appropriate.
//
// Examples:
//
// API
// localStorage
// Timer
// Event listener
// Subscription
// Browser APIs
//
// But remember:
//
// NOT every API call requires useEffect.
//
// If an API call happens directly because of
// a button click, an event handler can be appropriate.

//================================
// Weather App Example
//================================

// Our Weather App:
//
// <button onClick={searchCity}>Search</button>
//
// function searchCity() {
//     fetch(...);
// }
//
// This is completely valid.
//
// We don't need to use useEffect just because
// fetch() is being used.
//
// Flow:
//
// User clicks Search
//      ↓
// searchCity()
//      ↓
// fetch weather
//
// This is an event-driven action.

//================================
// useEffect vs Event Handler
//================================

// Event Handler:
//
// User performs an action
//      ↓
// Event handler runs
//
// Examples:
//
// onClick
// onChange
// onSubmit
//
// useEffect:
//
// State/props change
//      ↓
// Effect may run
//      ↓
// Synchronize with something outside React
//
// Simple rule:
//
// User action → Event Handler
//
// State/props change → useEffect may be appropriate

//================================
// Common Cleanup Examples
//================================

// clearInterval(id)
// clearTimeout(id)
// removeEventListener(...)
// unsubscribe()

//================================
// Common Mistakes
//================================

// 1. Forgetting dependencies
// 2. Putting side effects directly in component body
// 3. Creating infinite loops
// 4. Forgetting cleanup for timers/listeners/subscriptions
// 5. Using useEffect for simple calculations
// 6. Thinking every API call needs useEffect
// 7. Thinking useEffect is a replacement for event handlers

//================================
// Interview Questions
//================================

// Q1. What is useEffect?
//
// A React Hook used to run side effects and synchronize
// the component with external systems after rendering.

// Q2. What does [] mean?
//
// The effect has no dependencies and runs on initial mount.

// Q3. What does [count] mean?
//
// The effect runs on initial mount and whenever count changes.

// Q4. What happens if there is no dependency array?
//
// The effect runs after every render.

// Q5. What is cleanup?
//
// Code that cleans up resources created by an effect,
// such as timers, event listeners, and subscriptions.

// Q6. When does cleanup run?
//
// When the component unmounts and before an effect
// runs again because its dependencies changed.

// Q7. Does useEffect itself cause a re-render?
//
// No.
//
// But updating state inside useEffect can cause a re-render.

// Q8. Why shouldn't we put fetch directly in the component body?
//
// Because the component can render multiple times,
// which can cause repeated API requests.

// Q9. Does every API call need useEffect?
//
// No.
//
// An API call triggered directly by a user action,
// such as clicking Search, can be handled by an event handler.

// Q10. Why do we use useEffect?
//
// To synchronize React with side effects or external
// systems when rendering, state, or props change.

//================================
// Quick Revision
//================================

// Run after every render:

// useEffect(() => {
// });

// Run on mount:

// useEffect(() => {
// }, []);

// Run on mount + when count changes:

// useEffect(() => {
// }, [count]);

// Cleanup:

// useEffect(() => {
//     return () => {
//     };
// }, []);

//================================
// Final Mental Model
//================================

// useEffect:
//
// React renders
//      ↓
// Effect runs when its dependencies require it
//      ↓
// Synchronize with something outside React
//
// If the effect starts something:
//
// useEffect
//      ↓
// Start something
//      ↓
// return cleanup
//      ↓
// Stop/undo it when it is no longer needed

//================================
// One sentence to remember
//================================

// useEffect is NOT something we use just because React has it.
//
// Use it when a side effect needs to be synchronized
// with the component's rendering, state, or props.
//
// User action → Event Handler
//
// State/props change → useEffect may be appropriate
//
// Effect starts a resource → Cleanup stops/undoes it
