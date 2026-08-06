import { useState } from 'react';

//================================
// Sharing State Between Components
// (Lifting State Up)
//================================

//Sometimes two or more components need the same data.
//In that case, we move the state to their closest common parent.
//This is called lifting state up.

//--------------------------------
// Problem with separate state
//--------------------------------

// function SearchBar() {
//     const [query, setQuery] = useState('');
// }

// function ProductList() {
//     const [query, setQuery] = useState('');
// }

//These are two different states.
//Updating one does not update the other.
//The components are not synchronized.

//--------------------------------
// Correct approach
//--------------------------------

//State is moved to the parent component.

function App() {
    const [query, setQuery] = useState('');

    return (
        <>
            <SearchBar query={query} setQuery={setQuery} />
            <ProductList query={query} />
        </>
    );
}

//Now both components use the same state from App.
//App becomes the source of truth.

//--------------------------------
// Parent to Child data flow
//--------------------------------

//Data is passed from parent to child through props.

function ProductList({ query }) {
    return <p>Searching for: {query}</p>;
}

//--------------------------------
// Child to Parent communication
//--------------------------------

//A child cannot change parent state directly.
//The parent passes a function to the child.

function SearchBar({ query, setQuery }) {
    return (
        <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
        />
    );
}

//Flow:
//User types -> Child calls setQuery -> Parent state updates -> Both components re-render.

//--------------------------------
// Shared Counter Example
//--------------------------------

// function App() {
//     const [count, setCount] = useState(0);

//     return (
//         <>
//             <Increment setCount={setCount} />
//             <Display count={count} />
//         </>
//     );
// }

// function Increment({ setCount }) {
//     return (
//         <button onClick={() => setCount(c => c + 1)}>
//             +
//         </button>
//     );
// }

// function Display({ count }) {
//     return <h1>{count}</h1>;
// }

//Clicking the button updates the shared count,
//and the display component shows the new value.

//--------------------------------
// Closest Common Parent
//--------------------------------

// App
//   |
// Dashboard
//   |---- FilterPanel
//   |---- ProductTable

//If FilterPanel and ProductTable need the same filter state,
//the state should live in Dashboard, not in App.

//--------------------------------
// Do not lift state too high
//--------------------------------

//Wrong: putting every state in App.
//Correct: put state only in the nearest parent that needs to share it.

//--------------------------------
// One source of truth
//--------------------------------

//Keeping one shared state is better than duplicating state.

//Benefits:
//1. Components stay synchronized.
//2. Easier to debug.
//3. Easier to maintain.
//4. No inconsistent data.

//--------------------------------
// Common mistakes
//--------------------------------

//Wrong: duplicate state in parent and child

// const [query, setQuery] = useState(''); // parent
// const [query, setQuery] = useState(''); // child

//Wrong: mutating props

// props.query = 'React';

//Props are read-only.

//--------------------------------
// Common pattern
//--------------------------------

//Parent

// const [value, setValue] = useState('');

// <Child value={value} onChange={setValue} />

//Child

// function Child({ value, onChange }) {
//     return (
//         <input
//             value={value}
//             onChange={(e) => onChange(e.target.value)}
//         />
//     );
// }

//This is a very common React pattern.

//--------------------------------
// Real project examples
//--------------------------------

// Search bar + Product list
// Cart items + Total price
// Filter panel + Results
// Tabs + Content
// Accordion + Open section
// Modal + Open/Close button

//--------------------------------
// Important rules
//--------------------------------

//1. If multiple components need the same data, share the state.
//2. Move the state to the closest common parent.
//3. Pass data down through props.
//4. Pass functions down to allow children to update the state.
//5. Never mutate props.

//--------------------------------
// Interview Questions
//--------------------------------

//Q1. What is lifting state up?
//Moving shared state to the closest common parent component.

//Q2. Why do we lift state up?
//To keep multiple components synchronized using one source of truth.

//Q3. Can a child directly modify parent state?
//No. It can only call a function passed through props.

//Q4. Are props mutable?
//No. Props are read-only.

//Q5. What is the source of truth?
//The component that owns the shared state.

//--------------------------------
// Quick Revision
//--------------------------------

//Shared state in parent

// const [query, setQuery] = useState('');

//Pass value down

// <SearchBar query={query} />
// <ProductList query={query} />

//Pass updater down

// <SearchBar setQuery={setQuery} />

//Child uses callback

// onChange={(e) => setQuery(e.target.value)}

//Lifting state up is used whenever two or more components
//must stay synchronized with the same data.

export default App;