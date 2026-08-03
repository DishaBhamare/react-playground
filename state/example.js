//================================
//useState
//================================
//useState is a hook that allows us to add state to functional components in React. 
//It returns an array with two elements: the current state value and a function to update that state.
//For using useState we need to import it from react
//import { useState } from 'react';
//Ex.
import { useState } from 'react';
const [count, setCount] = useState(0);
//Here count is current value of state and setCount is a function to update the value of count.
//We have initialized the state with 0.
//We can write setCount as:
setCount(prevCount => prevCount + 1);//same as setCount(count + 1) but this is preferred way to update the state when the new state depends on the previous state.
//here prevCount is the previous value of count and we are updating the value of count by adding 1 to it.
//It will always update the state in a functional way.

//We can use more than one state variable in a component.
const [name, setName] = useState('Disha');
const [age, setAge] = useState(0);
//here we have 2 state variables
//first one denotes name and second one denotes age
//We can update the value of name and age using setName and setAge respectively.
// State is preserved between re-renders of the same component. 
// When React re-renders a component, it keeps the latest state value. 
//It means that if you update the state in one render, the updated value will be available in the next render.

//ex.
//If we want to update the state like after clicking count should be shift 2 places forward
const [count2, setCount2] = useState(0);
function handleClick() {
    setCount2(count2 + 1);
    setCount2(count2+ 1);
    }
//Here we will think that output will be 2 after clicking the button once 
// Both updates use the same value of count2 from the current render. 
// React batches state updates, so the final value becomes 1.
//So both updates their value to 1 immediately and the final value of count2 will be 1.

//To fix this we can use the functional way of updating the state like this:
function handleClick2() {
    setCount2(prevCount => prevCount + 1);
    setCount2(prevCount => prevCount + 1);
    }
//Output will be 2 after clicking the button once because we are using the previous value of count2 to update the state.
//prevCount is an argument that represents the previous value 

//State is always isolated and private to component in which it is defined.
//It means that if we define a state in a component then it will not be accessible in any other component.
//And change of any state will not affect any other state in any other component.

//ex.
function Counter() { 
    const [count, setCount] = useState(0); 

    return ( 
      <> 
        <h1>Count: {count}</h1> 
        <button onClick={() => setCount(count + 1)}> 
            Increment 
        </button> 
      </>
       ); 
    }

// ---------------------------- 
// Interview Questions 
// ---------------------------- 
// Q1. What does useState return? 
// An array containing the current state and a state updater function. 
// Q2. Why use functional updates? 
// When the new state depends on the previous state. 
// Q3. Is state shared between components? 
// No, state is isolated to each component instance. 
// Q4. Why do two setCount(count + 1) calls result in only +1? 
// Because both calls use the same state value from the current render.