//=================================
// Responding to Events
//=================================
//Event Handlers
//Event handler is a function that is called when user interaction occurs(ex.Click,mouseover,keydown, etc)

//Ex.
function handleClick() {
    console.log("Button clicked!");
}
<button onClick={handleClick}>Click Me</button>
//here whenever the button will be clicked a msg Button clicked! will be printed in the console

//handleClick vs handleClick()
//handleClick means we are passing the function to react and whenever the button will be clicked it will print msg 
//handleClick() means we are calling the function and it will print msg even we dont click the button ,it will run immediately when the component is rendered
//We need to pass the function reference to react not the function call
// React expects a function reference for event handlers. 
// The function is executed later when the event occurs.

//Passing Arguments to Event Handlers
//Ex.
function handleClick(name) {
   console.log(`Hello, ${name}!`);
}
<button onClick={() => handleClick('Disha')}>Click Me</button>
//Output:
//Hello, Disha! //Only when the button is clicked 
//Here we will not do handleClick('Disha') because it will call the function immediately when the component is rendered.
//we will use arrow function to pass the argument to the function
//So that the function will be called only when the button is clicked 
//It will always create a new function on every render ,here we are passing a function which will run later

//Input Event Handlers
//Ex.
function handleChange(event) {
    console.log(event.target.value);
}
<input type="text" onChange={handleChange} />
//Here event.target.value will give the value of the input field whenever it is changed and it will be printed in the console
// If the user types "Hello", the output will be:
//Output:
//H
//He
//Hel
//Hell
//Hello

//Form Submission Event Handlers
//Ex.
function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log("Form submitted!");
}
<form onSubmit={handleSubmit}> 
<button type="submit">Submit</button> </form>

//Here we are using event.preventDefault() so that the page will not be refreshed when the form is submitted and it will print Form submitted! in the console
//If we not use event.preventDefault() then the page will be refreshed and we will not see the msg in the console

//Multiple Buttons with Different Event Handlers
function handleClick1() {
    console.log("Button 1 clicked!");
}
function handleClick2() {
    console.log("Button 2 clicked!");
}
<>
<button onClick={handleClick1}>Button 1</button>
<button onClick={handleClick2}>Button 2</button>
</>
//Here we have 2 buttons and each button has its own event handler 
// and when we click on the button it will print the respective msg in the console.

//Connection With useState
function Counter() {
    const [prev,setCount]=useState(0);

    function handleIncrement() {
        setCount(prev+1);
    }
    function handleDecrement() {
        setCount(prev-1);
    }

    return (
        <>
            <h1>Count: {prev}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    );
}
//Output:
//Count: 0
//when increment button is clicked count will be increased by 1 
// when decrement button is clicked count will be decreased by 1
// Functional updates are preferred when the new state depends on the previous state.

//Things to remember
//1.Use camelCase for event handler names in React (e.g., onClick, onChange).
//2.Pass a function handleClick not call a function handleClick().
//3.Use arrow function to pass arguments to event handlers.
//4.Use event.preventDefault() to prevent default behavior of form submission.
//5.Use event.target.value to get the value of input field in input event handlers.

// ---------------------------- 
// Interview Questions 
// ---------------------------- 
// Q1. Difference between handleClick and handleClick()? 
// handleClick passes the function; handleClick() calls it immediately. 
// Q2. Why use event.preventDefault()? 
// To stop the browser's default behavior. 
// Q3. How do you get the value of an input? 
// event.target.value 
// Q4. Why use an arrow function in onClick? 
// To pass arguments to the event handler.