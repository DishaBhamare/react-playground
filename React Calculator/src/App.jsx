import { useState } from 'react';
export default function App() {
  const [varA, setvarA] = useState(0);
  const [varB, setvarB] = useState(0);
  const [output, setOutput] = useState(0);

  function Add() {
    setOutput(Number(varA) + Number(varB));
  }
  function Sub() {
    setOutput(Number(varA) - Number(varB));
  }
  function Mul() {
    setOutput(Number(varA) * Number(varB));
  }
  function Divide() {
    if (varB != 0) {
      setOutput(Number(varA) / Number(varB));
    } else {
      alert('Enter a valid number!');
    }
  }
  function Modulo() {
    setOutput(varA % varB);
  }
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Calculator</h1>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Output: {output}</h3>
      </div>
      <div className="flex flex-col gap-3 mb-4 max-w-sm">
        <input
          className="border rounded-lg px-4 py-3 w-full"
          placeholder="Enter first number"
          type="number"
          onChange={(e) => setvarA(e.target.value)}
          value={varA}
        ></input>
        <input
          className="border rounded-lg px-4 py-3 w-full"
          placeholder="Enter second number"
          type="number"
          onChange={(e) => setvarB(e.target.value)}
          value={varB}
        ></input>
      </div>
      <div className="flex gap-3 mt-3">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={Add}
        >
          +
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={Sub}
        >
          -
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={Mul}
        >
          X
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={Divide}
        >
          /
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={Modulo}
        >
          %
        </button>
      </div>
    </>
  );
}
