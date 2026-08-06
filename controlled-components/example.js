//================================
// Controlled Components
//================================

//A controlled component is an input element whose value is controlled by React state.
//The input always displays the value stored in state, and every user change updates that state.

//Ex.
const [name, setName] = useState('');

//Here name stores the current value of the input.
//setName is used to update that value.

//--------------------------------
// Basic controlled input
//--------------------------------
<>
<input
    value={name}
    onChange={(e) => setName(e.target.value)}
/>

//value={name} tells React to display the value stored in state.
//onChange runs whenever the user types.
//e.target.value contains the current text inside the input.

//Flow:
//User types -- onChange runs -- setName updates state -- input shows updated value.

//--------------------------------
// Why is it called controlled?
//--------------------------------

//Because React controls the input value through state.
//The browser is no longer the source of truth; React state is.

//--------------------------------
// Read-only input mistake
//--------------------------------

//Wrong

<input value={name} />
</>
//Without onChange, the input becomes read-only.
//The user can see the value but cannot change it.

//--------------------------------
// Live preview example
//--------------------------------

function App() {
    const [name, setName] = useState('');

    return (
        <>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <p>Hello {name}</p>
        </>
    );
}

//If the user types "Disha", the paragraph shows:
//Hello Disha

//--------------------------------
// Multiple inputs using one object
//--------------------------------

const [form, setForm] = useState({
    name: '',
    email: ''
});

//--------------------------------
// Common handleChange function
//--------------------------------

function handleChange(e) {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
}

//[e.target.name] creates a dynamic key.

//--------------------------------
// Inputs
//--------------------------------
<>
<input
    name="name"
    value={form.name}
    onChange={handleChange}
/>

<input
    name="email"
    value={form.email}
    onChange={handleChange}
/>
</>

//If the email input changes, state becomes:
//{ email: 'abc@test.com' }

//--------------------------------
// Why use one handleChange?
//--------------------------------

//It avoids writing separate functions for every input field.
//It makes forms easier to maintain and scale.

//--------------------------------
// Form submission
//--------------------------------

function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
}

//preventDefault() stops the page from refreshing when the form is submitted.

//--------------------------------
// Complete form example
//--------------------------------

function App2() {
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

    function handleSubmit(e) {
        e.preventDefault();
        console.log(form);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={form.name}
                onChange={handleChange}
            />

            <input
                name="email"
                value={form.email}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

//--------------------------------
// Common mistakes
//--------------------------------

//Wrong: forgetting value
//<input onChange={...} />
//This becomes uncontrolled.

//Wrong: forgetting onChange
//<input value={name} />
//This becomes read-only.

//Wrong: replacing the whole object

setForm({
    name: 'Disha'
});

//This removes other fields such as email.

//Correct:

setForm({
    ...form,
    name: 'Disha'
});

//--------------------------------
// Important rules
//--------------------------------

//1. Store input values in React state.
//2. Use value to display state.
//3. Use onChange to update state.
//4. Use one handleChange for multiple inputs.
//5. Use preventDefault on form submission.

//--------------------------------
// Interview Questions
//--------------------------------

//Q1. What is a controlled component?
//An input whose value is controlled by React state.

//Q2. What does e.target.value contain?
//The current value typed by the user.

//Q3. Why does an input become read-only?
//Because value is provided without an onChange handler.

//Q4. Why use [e.target.name]?
//To update different fields dynamically using one function.

//Q5. Why use preventDefault()?
//To prevent the default form submission and page refresh.

//Q6. What is the source of truth in a controlled component?
//React state.

//--------------------------------
// Quick Revision
//--------------------------------

//Single input

const [name2, setName2] = useState('');

<input
    value={name2}
    onChange={(e) => setName2(e.target.value)}
/>

//Multiple inputs

setForm({
    ...form,
    [e.target.name]: e.target.value
});

//Submit

e.preventDefault();

//Controlled components are used in login forms, registration forms,
//search bars, checkout forms, profile editing forms, and most MERN projects.