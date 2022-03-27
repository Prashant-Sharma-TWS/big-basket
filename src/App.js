import React from "react";
import "./App.css";
import { Footer } from "./Components/Footer";
import { Counter } from "./Redux/counter/Counter";
import { Routers } from "./Routers/Routers";

function App() {
  return (
    <div className="App">
      <div>
        {/* <Routers />
        <Counter /> */}
        <Footer/>     
      </div>
    </div>
  );
}

export default App;
