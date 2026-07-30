// ========================================== 
// React Components 
// ========================================== 
// A React component is a reusable JavaScript function that returns JSX. 
// ------------------------------------------ 
// Basic component 
// ------------------------------------------
//ex.
function Congratulations(){
    return(
        <h1>Congratulations, Good job!</h1>
    );
}

//Step 1:export the component
// The export default prefix is a standard JavaScript syntax (not specific to React). 
// It lets you mark the main function in a file so that you can later import it from other files.
//Step 2:define function
//With function Congratulations() { } you define a JavaScript function with the name Congratulations.
// React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!
function Hello() {}

//Step 3:Add markup
// The component returns an <img /> tag with src and alt attributes.
// <img /> is written like HTML, but it is actually JavaScript under the hood! 
// This syntax is called JSX, and it lets you embed markup inside JavaScript.
function ProfilePhoto(){
    return(
  <div>
    <img src="https://react.dev/images/docs/scientists/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);
}

// We can also use a component inside another component, but we should export the main component that uses the other component.
function Profile() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

// Components can render other components, but you must never nest their definitions:
 function Picture() {
// Avoid defining components inside other components unnecessarily.
// It does not always cause an error, but it can lead to performance and readability issues.
//   function Profile() {
//     
//   }
  
}
//============================
// Importing and Exporting Components
//============================
//In above example we can see that their is Gallery component so we can use that by importing it like
import Gallery from './Gallery.js';
// This import would normally be written in a different file (for example, App.jsx).

//we can also import multiple components 
//Default:

// export default function Button() {}	
// import Button from './Button.js';

// Named:
// export function Button() {}	
// import { Button } from './Button.js';