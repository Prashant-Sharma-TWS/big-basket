import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Routers } from "./Routers/Routers";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Routers />
      </div>
    </div>
  );
}

export default App;
