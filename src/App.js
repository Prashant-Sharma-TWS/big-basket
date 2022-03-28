import React from "react";
import "./App.css";
import { Checkout } from "./Pages/Checkout";
import { Counter } from "./Redux/counter/Counter";
import { Routers } from "./Routers/Routers";

function App() {
  return (
    <div className="App">
      <div>
        {/* <Routers />
        <Counter /> */}
        <Checkout/>
      </div>
    </div>
  );
}

export default App;
