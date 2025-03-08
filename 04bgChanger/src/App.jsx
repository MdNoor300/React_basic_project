import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  // function changeColor(color) {
  //   setColor(color);
  // }

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap justify-center bottom-12
      inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center gap-3
        shadow-lg bg-gray-300 px-2 py-2 rounded-3xl"
        >
          
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 bg-white rounded-full
          shadow-lg text-black hover:bg-green-600"
          >
            Green
          </button>
          <button
            onClick={() => setColor("Red")}
            className="outline-none px-4 py-1 bg-white rounded-full
          shadow-lg text-black hover:bg-red-600"
          >
            Red
          </button>
          <button
            onClick={() => setColor("Blue")}
            className="outline-none px-4 py-1 bg-white rounded-full
          shadow-lg text-black hover:bg-blue-600"
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
