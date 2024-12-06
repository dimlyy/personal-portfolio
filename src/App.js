import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services";
import Qualification from "./components/Qualification";
import Portfolio from "./components/Portfolio";

function App() {
  return (
        <Router>
          <Header />
          <main className="main">
            <Home />
            <About />
            <Skills />
            <Services/>
            <Qualification/>
            <Portfolio/>
          </main>
        </Router>
  )
}

export default App;
