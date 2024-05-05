import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("#000000");

  return (
    <>
      <div
        className="w-full h-screen flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        <div className="w-56 h-36 bg-white p-4 border border-1 rounded-xl">
          {bgColor !== "#ffffff" ? (
            <h1
              className="font-bold text-xl text-center mb-4"
              style={{ color: bgColor }}
            >
              Color Picker
            </h1>
          ) : (
            <h1 className="font-bold text-xl text-center mb-4">Color Picker</h1>
          )}

          <div className="overflow-hidden bg-white border border-gray-200 rounded-lg flex gap-4 items-center justify-evenly">
            <input
              type="color"
              class="p-1 h-10 w-14 block bg-white cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
              id="ColorPicker"
              value={bgColor}
              title="Choose your color"
              onChange={(e) => setBgColor(e.target.value)}
            ></input>
            <p className="px-2">{bgColor}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
