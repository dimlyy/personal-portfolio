import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import { useState } from "react";
import About from "./components/About";
import Skills from "./components/Skills/Skills";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const onClick = () => {
    setDarkTheme(!darkTheme);
  }

  return (
      <div data-theme={darkTheme && 'dark'}>
        <Router>
          <Header />
          <main className="main">
            <Home />
            <About />
            <Skills />
          </main>
        </Router>
      </div>
  )
}

export default App;
