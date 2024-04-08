import React from "react";

const Grid1 = () => {
  return (
    <div>
      <h1>THIS IS GRID 1</h1>
      <div className="grid grid-col-12 h-screen grid-rows-layout">
        <div className="bg-red-400 p-2 col-start-1 col-end-13">
          <header className=" flex items-center justify-between h-full">
            <h1>Logo</h1>
            <ul className="flex gap-4">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>project</li>
            </ul>
          </header>
        </div>
        <div className="bg-purple-500 p-2 col-span-3 h-full">2</div>
        <div className="bg-gray-600 p-2 col-span-9 h-full">3</div>
        <div className="bg-orange-500 p-2 col-span-12 h-full">4</div>
      </div>
    </div>
  );
};

export default Grid1;
