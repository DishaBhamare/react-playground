//============================
//JSX
//============================
//JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.
// If we directly copy-paste HTML into a React component, it will not work as valid JSX.

//--------------------------------
//Rules to convert html into jsx
//---------------------------------
// 1. Return a single root element 
// A React component must return only one JSX root element. 
// If you want to return multiple elements, wrap them inside a parent element 
// such as <div>...</div> or a Fragment <>...</>. 
// Example: 
// return ( 
// <> 
// <h1>Hello</h1> 
// <p>Welcome</p> 
// </> 
// ); 

// 2. Close all tags 
// Every JSX tag must be properly closed. 
// Self-closing tags use a slash, such as <img /> or <br />. 
// Normal elements need both opening and closing tags. 
// Example: 
// <img src="photo.jpg" alt="Photo" /> 
// <li>Oranges</li>

// 3. Use camelCase for most HTML attributes in JSX
//Like instead of class use className 
// class -> className 
// onclick -> onClick 
// tabindex -> tabIndex
//ex.
export default function Bio() {
  return (
    <>
    <div className="introduction">
      <h1>Welcome to my website!</h1>
    </div>
  
    <p className="summary">
      You can find what you want here !
      <br />
      <b>And <i>information</i></b> of scientists!
    </p>
      </>
  );
}
//JavaScript in JSX with Curly Braces
//We can use obj in jsx by putting them in curly braces 
function Hello(){
    const greet="Welcome to coding world";

    const person={
        name:"Disha",
    };

    return(
        <>
        <h1>Hello, {person.name}</h1>
        <h1>{greet}</h1>
        </>

    );
}
// Curly braces accept JavaScript expressions, not statements.

// expression
// {2 + 2} //can use

// statement
// {if (true) { }} //can't use

// ----------------------------
// Interview Questions
// ----------------------------

// Q1. What is JSX?
// A syntax extension that lets us write HTML-like markup inside JavaScript.

// Q2. Why do we need a single root element?
// Because a component must return one JSX element.

// Q3. Why is class replaced with className?
// class is a reserved keyword in JavaScript.

// Q4. What can be written inside curly braces?
// Any JavaScript expression that produces a value.