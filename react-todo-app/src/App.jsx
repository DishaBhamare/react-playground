import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function add() {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
    }

    setTask('');
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function toggleCompleted(index) {
    setTasks(
      tasks.map((t, i) => (i == index ? { ...t, completed: !t.completed } : t))
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">To Do List</h1>
        <div className="flex gap-3 mb-6">
          <input
            className="flex-1 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Task to be done"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl font-medium"
            onClick={add}
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {tasks.map((t, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded-xl p-3 bg-gray-50"
            >
              {' '}
              <span
                className={
                  t.completed ? 'line-through text-gray-400' : 'text-gray-800'
                }
              >
                {t.text}
              </span>
              <button
                className="text-red-500 hover:text-red-700 font-medium"
                onClick={() => toggleCompleted(index)}
              >
                {t.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                className="text-red-500 hover:text-red-700 font-medium"
                onClick={() => removeTask(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
