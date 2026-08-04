# Updating Objects in State 

## Overview React state should be treated as **immutable**. Instead of modifying an existing object directly, create a new object and update only the properties that need to change. 

--- 

## Concepts Covered 
- Updating object state 
- Object immutability 
- Spread operator (`...`) 
- Updating multiple properties 
- Updating nested objects 
- Functional updates with objects 
- Form handling with a single `handleChange` '
- Dynamic property names (`[e.target.name]`) 

--- 

## Key Takeaways 
- Never mutate state directly. 
- Use the spread operator to create a new object. 
- Updating one property should preserve the other properties. 
- Nested objects require spreading every level that changes. 
- Functional updates are useful when the next state depends on the previous state. 
- A single `handleChange` function can manage multiple form fields. 

--- 

## Common Mistakes 

### Direct Mutation ❌ 

```jsx 
 user.name = "Aditi";
 setUser(user); 
 ```
 
  ### Correct Update ✅ 
  ```jsx 
  setUser({ 
    ...user,
     name: "Aditi" 
     });
``` 

### Nested Mutation ❌ 
```jsx 
user.address.city = "Nashik";
 setUser(user);
  ```
   ### Nested Update ✅ 
   ```jsx 
   setUser({ 
    ...user,
     address: { ...user.address, city: "Nashik" } });
  ``` 
      
--- 

## Real-World Use Cases 
- User profile forms 
- Settings pages 
- Shopping cart items 
- Address management 
- Dynamic form inputs 

--- 
 ## Files -
  `examples.jsx` 
  — Examples covering object updates, nested state updates, functional updates, and form handling.