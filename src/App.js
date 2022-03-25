import React from "react";
import "./App.css";
import { Counter } from "./Redux/counter/Counter";
import { Routers } from "./Routers/Routers";

function App() {
  return (
    <div className="App">
      <div>
        <Routers />
        <Counter />
      </div>
    </div>
  );
}

export default App;
