import React from "react";
import { SingleProduct } from "./Components/productPages/SingleProduct";
import "./App.css";
import { Navbar } from "./Components/Home/Navbar";
import { Routers } from "./Routers/Routers";
import { Footer } from "./Components/Home/Footer";

function App() {
  return (
    <div className="App">
      {/* <SingleProduct /> */}
      <Navbar />
      <div>
        <Routers />
        <Footer />
      </div>
    </div>
  );
}

export default App;
