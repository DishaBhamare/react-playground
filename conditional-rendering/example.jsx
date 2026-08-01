//=========================
// Conditional Rendering 
//=========================
//Conditional rendering is used when we need to display different things based on conditions
//In React, we can use JavaScript operators like if or the ternary operator for conditional rendering.
//ex. of conditional rendering using if statement
//Here is condition is true then first expression will be returned otherwise second expression will be returned
function Authentication() {
let isLoggedIn = true;
if(isLoggedIn){
    return <h1>Welcome back!</h1>;
}
 return <h1>Please sign up.</h1>;
}
//ex. of conditional rendering using ternary operator
//Here if condition is true then 1st expression will be returned otherwise 2nd expression will be returned
function SignInMessage() { 
    const isSignedIn = false;
     return ( 
     <> 
     {isSignedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
      </> 
      ); 
  }

//ex. of conditional rendering using logical && operator
//Here is condition is true then second expression will be returned otherwise it will return false
function AdminMessage() { 
    const isAdmin = true; 
    return ( 
    <> 
    {isAdmin && <h1>Welcome Admin!</h1>} 
    </> 
    );
 }

//ex. of conditional rendering using ternary operator in JSX
function Product({ name, isShipped }) {
  return (
    <li className="item">
      {isShipped? (
     <h1>{name + ' ✅'}</h1>  
        
      ) : (
        <h1>{name}</h1>
      )}
    </li>
  );
}

export default function ShippingList() {
  return (
    <section>
      <h1>Shipping List</h1>
      <ul>
        <Product
          isShipped={true}
          name="Book"
        />
        <Product
          isShipped={true}
          name="Game Controller"
        />
        <Product
          isShipped={false}
          name="Headphones"
        />
      </ul>
    </section>
  );
}
//Here we use ternary operator to check if the product is shipped or not. 
//If the product is shipped then we will display the name of the product with a check mark 
//otherwise we will display the name of the product without a check mark. 

//if -> for larger logic 
// ? : -> for choosing between two values 
// && -> for showing something only when the condition is true

// ---------------------------- 
// Interview Questions 
// ---------------------------- 
// Q1. What is conditional rendering? 
// Displaying different UI based on a condition. 
// Q2. When should we use if? 
// When the logic is complex. 
// Q3. When should we use the ternary operator? 
// When choosing between two UI outputs. 
// Q4. What does && do in React? 
// It renders the right side only if the left side is truthy.