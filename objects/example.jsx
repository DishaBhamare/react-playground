//================================
// Objects in React
//================================

// Objects are used to store related data as key-value pairs.

const user = {
    name: "Disha",
    age: 21,
    city: "Pune"
};

// Accessing object properties
console.log(user.name); // Disha
console.log(user["age"]); // 21

// --------------------------------
// Using objects in JSX
// --------------------------------

function Profile() {
    const user = {
        name: "Disha",
        age: 21
    };

    return (
        <>
            <h1>{user.name}</h1>
            <p>Age: {user.age}</p>
        </>
    );
}

// JavaScript expressions can be placed inside JSX using curly braces.
// We can access object properties inside JSX using {object.property}.

// --------------------------------
// Destructuring objects
// --------------------------------

function UserInfo() {
    const user = {
        name: "Disha",
        age: 21
    };

    const { name, age } = user;

    return (
        <>
            <h1>{name}</h1>
            <p>{age}</p>
        </>
    );
}

// Destructuring creates variables from object properties.

// --------------------------------
// Objects as props
// --------------------------------

function UserCard({ user }) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.age}</p>
        </div>
    );
}

function App() {
    const user = {
        name: "Disha",
        age: 21
    };

    return <UserCard user={user} />;
}

// Here the complete user object is passed as a prop.

// --------------------------------
// Destructuring object props
// --------------------------------

function UserCard({ user }) {
    const { name, age } = user;

    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    );
}

// We can also destructure directly:

function UserCard({ user: { name, age } }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    );
}

// --------------------------------
// Updating objects in state
// --------------------------------

// State objects should not be mutated directly.
// Use the spread operator to create a new object.

// const [user, setUser] = useState({
//     name: "Disha",
//     age: 21
// });

// setUser({
//     ...user,
//     age: 22
// });

// The spread operator copies the existing properties,
// and the changed property is replaced with the new value.

// --------------------------------
// Important points
// --------------------------------

// 1. Objects store related data as key-value pairs.
// 2. Object properties can be accessed using dot or bracket notation.
// 3. Objects can be used inside JSX with curly braces.
// 4. Objects can be passed as props.
// 5. Object destructuring makes accessing properties easier.
// 6. State objects should be updated immutably.