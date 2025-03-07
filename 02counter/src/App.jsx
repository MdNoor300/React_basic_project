import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
  };

  const resetValue = () => {
    setCounter((prevCounter) => (prevCounter > 0 ? 0 : 0));
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4">
      <div className="bg-white text-gray-900 p-8 md:p-16 rounded-2xl shadow-2xl text-center w-full max-w-3xl transform transition-all duration-300 hover:scale-105">
        <h1 className=" text-5xl font-bold mb-6 animate-pulse">তাজবিহ পড়ুন: {counter}</h1>
        <h2 className="text-2xl font-semibold mb-8">Counter Value</h2>

        <div className="flex justify-center gap-6">
          <button
            onClick={addValue}
            className="px-8 py-4 hover:bg-green-600 hover:text-blue-700 text-xl font-bold rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            + Add
          </button>
          <button
            onClick={removeValue}
            className="px-8 py-4 bg-red-500 hover:bg-red-600 hover:text-blue-700 text-black text-xl font-bold rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            - Remove
          </button>

          <button
            onClick={resetValue}
            className="px-8 py-4 bg-red-500 hover:bg-red-600 hover:text-blue-700 text-black text-xl font-bold rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-red-600"
          >
            Reset
          </button>
        </div>

        <p className="mt-8 text-2xl font-medium">সর্বমোট: <span className="font-bold text-indigo-600">{counter}</span></p>
      </div>
    </div>
  );
}

export default App;
