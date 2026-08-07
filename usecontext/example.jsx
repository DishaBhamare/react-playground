import { createContext, useContext, useState } from 'react';

//================================
// useContext
//================================

//useContext is used to avoid unnecessary passing of props through many intermediate components.
//This problem is called prop drilling.

//--------------------------------
// Prop Drilling
//--------------------------------

// App
//   |
// Layout
//   |
// Header
//   |
// Navbar
//   |
// CartIcon

//If only CartIcon needs cartCount, then passing cartCount through Layout,
//Header, and Navbar becomes repetitive.
//Here we have to pass props through components that don't even need it, just to reach CartIcon.

//--------------------------------
// Using Props
//--------------------------------

//Props are usually the best choice for direct children.

//App
//  |
//  |
// CartIcon 

// function App() {
//     const cartCount = 3;
//     return <CartIcon cartCount={cartCount} />;
// }

//This is simple and recommended when components are close.

//--------------------------------
// When Context Helps
//--------------------------------

//Context is useful when many distant components need the same data.

//Examples:
//1. Logged-in user
//2. Theme
//3. Cart
//4. Language
//5. Notifications

//--------------------------------
// Step 1: Create Context
//--------------------------------

//A context is like a shared box.

const CartContext = createContext();

//If no Provider is found, the default value is used.

// const ThemeContext = createContext('light');

//Without Provider:
// useContext(ThemeContext) -> 'light'

//If we wrote 
//const ThemeContext = createContext();
//This will return undefined as we donot have any provider neither the default value

//--------------------------------
// Step 2: Provide the Value
//--------------------------------

//The Provider makes the value available to all child components.

function App() {
    const [cartCount, setCartCount] = useState(0);

    return (
        <CartContext.Provider value={{ cartCount, setCartCount }}>
            <Navbar />
            <Products />
        </CartContext.Provider>
    );
}

//--------------------------------
// Step 3: Read the Value
//--------------------------------

function Navbar() {
    const { cartCount } = useContext(CartContext);

    return <h1>Cart: {cartCount}</h1>;
}

//--------------------------------
// Step 4: Update the Value
//--------------------------------

function Products() {
    const { setCartCount } = useContext(CartContext);

    return (
        <button onClick={() => setCartCount(c => c + 1)}>
            Add to Cart
        </button>
    );
}

//Flow:
//Button click -> setCartCount -> context value changes -> Navbar re-renders

//--------------------------------
// Visual Flow
//--------------------------------

// App
//   |
// CartContext.Provider
//   |---- Navbar   -> reads cartCount
//   |---- Products -> updates cartCount

//--------------------------------
// createContext vs useContext
//--------------------------------

//createContext()
//Creates the shared box.

//useContext()
//Reads the value from the nearest Provider.

//--------------------------------
// Common Confusion
//--------------------------------

//Wrong

// const ThemeContext = useContext(ThemeContext);

//This tries to read a context instead of creating one.

//Correct

// const ThemeContext = createContext();

//--------------------------------
// No Provider Case
//--------------------------------

// const UserContext = createContext();

// function Page() {
//     const user = useContext(UserContext);
// }

//user becomes undefined because no Provider exists
//and no default value was given.

//With default value:

// const UserContext = createContext('Guest');

//Now user becomes 'Guest'.

//--------------------------------
// Does useContext store data?
//--------------------------------

//No.
//The Provider stores/shares the value.
//useContext only reads the value.

//--------------------------------
// Does useContext cause re-render?
//--------------------------------

//When the value provided by Provider changes,
//components using that context re-render.

//--------------------------------
// Props vs Context
//--------------------------------

// Props
// - Direct or nearby components
// - Clear and explicit
// - Preferred for small trees

// Context
// - Many distant components
// - Avoids prop drilling
// - Better for shared app-level state

//--------------------------------
// Important Clarification
//--------------------------------

//Props can pass through many levels,
//but each intermediate component must forward them manually.

//Context removes this manual forwarding.

//--------------------------------
// Real-World Pattern
//--------------------------------

//Instead of writing CartContext.Provider directly in App,
//developers often create a custom provider component.

export function CartProvider({ children }) {
    const [cartCount, setCartCount] = useState(0);

    return (
        <CartContext.Provider value={{ cartCount, setCartCount }}>
            {children}
        </CartContext.Provider>
    );
}

//Usage:

// <CartProvider>
//     <Navbar />
//     <Products />
// </CartProvider>

//Navbar.jsx and Products.jsx remain exactly the same.

//--------------------------------
// What Actually Changes?
//--------------------------------

//Without custom provider:
// App contains all cart state and provider logic.

//With custom provider:
// Cart logic is moved to a separate reusable component.

//This makes App cleaner and easier to maintain.

//--------------------------------
// Context is NOT a replacement for props
//--------------------------------

//Use props first.
//Use context when prop drilling becomes annoying.

//--------------------------------
// Interview Questions
//--------------------------------

//Q1. What problem does useContext solve?
//Prop drilling.

//Q2. What are the 3 steps?
//Create, Provide, Consume.

//Q3. Can context share functions?
//Yes.

//Q4. Can context share objects?
//Yes.

//Q5. What happens if no Provider exists?
//Default value is used; otherwise undefined.

//Q6. Should all state be moved to context?
//No.

//--------------------------------
// Quick Revision
//--------------------------------

//Create
// const MyContext = createContext();

//Provide
// <MyContext.Provider value={data}>

//Read
// const data = useContext(MyContext);

//Update
// setData(newValue);

//--------------------------------
// The One Sentence to Remember
//--------------------------------

//Props are for passing data to nearby components.
//Context is for sharing data with many distant components
//without manually forwarding props through every level.

export default App;