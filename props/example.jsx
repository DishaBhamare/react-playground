//============================
//Passing Props to Component
//=============================
//In react, components use props to communicate with each other
// Props are values passed from a parent component to a child component.
// Props are one-way: Parent → Child.
//ex.className, src, alt...
//If we have 2 components in 2 different files as App.js and Card.js
//App.js
function App(){
    return(
        <div>
            <Card name="Disha">
        {/* everthing written inside this can be accesed using props.children or {children} */}
        <p>Everything written here is available as props.children</p>
        </Card>
        </div>
        
    );
};
//Card.jsx
const Card = (props) => {
    return(
        <div>
        <h1>{props.name}</h1>
        </div>
    );
};

//Output:Disha
// The parent component passes data to the child component through props.
//We can also pass it like 
// const Card = ({name}) => {
//     return(
//         <div>
//         <h1>{name}</h1>
//         </div>
//     );
// };

//We can also use it by children name everthing written inside <Card>Everthing written here is called as children </Card>
//Instead of props.name we can do props.children
//Also be passed as {children} instead of prop and accessed as {children}

// We can also pass a function from a parent component to a child component.
//App.js

// function App(){
// const [count,setCount]=useState(0);
// function handleclick(){
//     setCount(count+1);
// }
//     return(
//         <div>
//       <Button incrementCount={handleclick}>
        // <h1>{count}</h1>
//       </Button>
//         </div>
        
//     );
// };

//button.js
const Button =(props)=>{
    return(
        <>
            <h1>{props.children}</h1>
            <button onClick={props.incrementCount}>Click Me</button>
        </>
    )
}

// ---------------------------- 
// Interview Questions 
// ---------------------------- 
// Q1. What are props? 
// Data passed from parent to child components. 
// Q2. Are props mutable? 
// No, props are read-only. 
// Q3. What is props.children? 
// It represents the content placed between opening and closing component tags. 
// Q4. Why pass functions as props? 
// To allow child components to trigger actions in the parent component.