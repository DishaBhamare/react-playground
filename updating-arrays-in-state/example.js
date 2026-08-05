//================================
// Updating Arrays in State
//================================

//In React, arrays in state should be treated as immutable.
//It means we should not modify the existing array directly.
//Instead, we create a new array and update it.

//Ex.
const [items, setItems] = useState(['Apple', 'Mango']);

//--------------------------------
// Wrong way (mutation)
//--------------------------------

items.push('Banana');
setItems(items);

//push() modifies the original array.
//React may not detect the change correctly because the array reference remains the same.

//--------------------------------
// Correct way
//--------------------------------

setItems([...items, 'Banana']);

//...items copies all existing elements.
//'Banana' is added to the end of the new array.

//Result:
//['Apple', 'Mango', 'Banana']

//--------------------------------
// Add item at the beginning
//--------------------------------

setItems(['Banana', ...items]);

//Result:
//['Banana', 'Apple', 'Mango']

//--------------------------------
// Removing items using filter()
//--------------------------------

const [todos, setTodos] = useState([
    { id: 1, text: 'Study' },
    { id: 2, text: 'Sleep' },
    { id: 3, text: 'Exercise' }
]);

setTodos(
    todos.filter(todo => todo.id !== 2)
);

//filter() keeps only the elements that satisfy the condition.
//Todo with id 2 is removed.

//Result:
//[
//  { id: 1, text: 'Study' },
//  { id: 3, text: 'Exercise' }
//]

//--------------------------------
// Updating one item using map()
//--------------------------------

setTodos(
    todos.map(todo =>
        todo.id === 1
            ? { ...todo, text: 'React Study' }
            : todo
    )
);

//map() creates a new array.
//If the condition is true, we return an updated object.
//Otherwise we return the original object.

//Result:
//[
//  { id: 1, text: 'React Study' },
//  { id: 2, text: 'Sleep' },
//  { id: 3, text: 'Exercise' }
//]

//--------------------------------
// Toggling a boolean value
//--------------------------------

const [tasks, setTasks] = useState([
    { id: 1, done: false },
    { id: 2, done: false }
]);

setTasks(
    tasks.map(task =>
        task.id === 2
            ? { ...task, done: !task.done }
            : task
    )
);

//!task.done reverses the boolean value.

//Result:
//[
//  { id: 1, done: false },
//  { id: 2, done: true }
//]

//--------------------------------
// Functional updates with arrays
//--------------------------------

//Use this when the new state depends on the previous state.

setItems(prevItems => [...prevItems, 'Orange']);

//prevItems represents the latest previous state.

//--------------------------------
// Queueing state updates
//--------------------------------

const [numbers, setNumbers] = useState([1, 2]);

function handleClick() {
    setNumbers([...numbers, 3]);
    setNumbers([...numbers, 4]);
}

//Both updates use the same snapshot of numbers.
//Final result becomes [1, 2, 4].

//Correct version:

function handleClick2() {
    setNumbers(prev => [...prev, 3]);
    setNumbers(prev => [...prev, 4]);
}

//Final result becomes [1, 2, 3, 4].

//--------------------------------
// Common mistakes
//--------------------------------

//Wrong: mutating array
//items.push('A');

//Wrong: removing with splice
//items.splice(1, 1);

//Wrong: mutating object inside array
//todos[0].done = true;

//Always return a new array and new objects when updating state.

//--------------------------------
// Important rules
//--------------------------------

//1. Never mutate arrays in state.
//2. Use spread operator (...) to add items.
//3. Use filter() to remove items.
//4. Use map() to update items.
//5. Use functional updates when the new state depends on the previous state.

//--------------------------------
// Interview Questions
//--------------------------------

//Q1. Why should arrays in React state not be mutated?
//Because React relies on new references to detect changes and trigger re-renders.

//Q2. How do you add an item to an array state?
//setItems([...items, newItem]);

//Q3. How do you remove an item by id?
//setItems(items.filter(item => item.id !== id));

//Q4. How do you update one item in an array?
//setItems(items.map(item =>
//  item.id === id ? { ...item, value } : item
//));

//Q5. How do you toggle a boolean property?
//setItems(items.map(item =>
//  item.id === id ? { ...item, done: !item.done } : item
//));

//Q6. Why use functional updates with arrays?
//To ensure each update uses the latest state value when multiple updates are queued.