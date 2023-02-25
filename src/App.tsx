//how created a menu navabar com react?

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import { Header } from "./components/Header";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div style={{}}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
