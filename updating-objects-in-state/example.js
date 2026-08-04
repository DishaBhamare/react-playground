//================================
//Updating Objects in State
//================================

//In React, state should be treated as immutable.
//It means we should not change the existing object directly.
//Instead, we create a new object and update the changed properties.

import { useState } from 'react';
//Ex.
const [user, setUser] = useState({
    name: 'Disha',
    age: 21
});

//Here user is an object stored in state.

//--------------------------------
// Wrong way (mutation)
//--------------------------------

user.name = 'Aditi';
setUser(user);

//This mutates the original object.
//React may not detect the change correctly because the object reference remains the same.

//--------------------------------
// Correct way
//--------------------------------

setUser({
    ...user,
    name: 'Aditi'
});

//...user copies all existing properties.
//Then name is replaced with the new value.

//Result:
//{ name: 'Aditi', age: 21 }

//--------------------------------
// Updating multiple properties
//--------------------------------

setUser({
    ...user,
    name: 'Aditi',
    age: 22
});

//Result:
//{ name: 'Aditi', age: 22 }

//--------------------------------
// Why spread operator is needed?
//--------------------------------

//If we write:

setUser({
    name: 'Disha'
});

//Then all other properties are lost.

//Suppose previous state was:
//{ name: 'A', age: 21, city: 'Pune' }

//New state becomes:
//{ name: 'Disha' }

//age and city are removed.

//--------------------------------
// Nested objects in state
//--------------------------------

const [user2, setUser2] = useState({
    name: 'Disha',
    address: {
        city: 'Pune',
        pin: '411001'
    }
});

//--------------------------------
// Wrong nested update
//--------------------------------

user2.address.city = 'Nashik';
setUser2(user2);

//This mutates nested state.

//--------------------------------
// Correct nested update
//--------------------------------

setUser2({
    ...user2,
    address: {
        ...user2.address,
        city: 'Nashik'
    }
});

//We spread both the top-level object and the nested object.

//Result:
//{
//   name: 'Disha',
//   address: {
//      city: 'Nashik',
//      pin: '411001'
//   }
//}

//--------------------------------
// Functional update with objects
//--------------------------------

//Use this when the new state depends on the previous state.

setUser(prevUser => ({
    ...prevUser,
    age: prevUser.age + 1
}));

//prevUser represents the latest previous state.

//--------------------------------
// Form handling pattern
//--------------------------------

const [form, setForm] = useState({
    name: '',
    email: ''
});

function handleChange(e) {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
}

//[e.target.name] creates a dynamic key.

//If input is:
//<input name="email" />

//and user types:
//abc@test.com

//State becomes:
//{ email: 'abc@test.com' }

//--------------------------------
// Why use one handleChange?
//--------------------------------

//It allows us to manage multiple input fields with a single function.

//--------------------------------
// Important rules
//--------------------------------

//1. Never mutate state directly.
//2. Use spread operator to copy objects.
//3. Spread every nested level that changes.
//4. Use functional updates when new state depends on previous state.

//--------------------------------
// Interview Questions
//--------------------------------

//Q1. Why should we not mutate objects in React state?
//Because React relies on object references to detect changes and trigger re-renders.

//Q2. How do you update only one property of an object?
//setUser({ ...user, age: 22 });

//Q3. How do you update a nested object?
//setUser({
//   ...user,
//   address: {
//      ...user.address,
//      city: 'Nashik'
//   }
//});

//Q4. What does [e.target.name] do?
//It uses the input field's name attribute as the object key.

//Q5. When should functional updates be used with objects?
//When the new state depends on the previous state.