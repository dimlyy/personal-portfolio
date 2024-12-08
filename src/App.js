import React, { Suspense, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const Header = React.lazy(() => import("./components/Header"));
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Skills = React.lazy(() => import("./components/Skills/Skills"));
const Services = React.lazy(() => import("./components/Services"));
const Qualification = React.lazy(() => import("./components/Qualification"));
const Portfolio = React.lazy(() => import("./components/Portfolio"));
const Footer = React.lazy(() => import("./components/Footer"));
const ScrollUp = React.lazy(() => import("./components/ScrollUp"));

function App() {
  const savedTheme = localStorage.getItem("theme") === "true"; // mặc định là light
  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    // Lưu giá trị theme vào localStorage
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Router>
      <div data-theme={theme ? 'light' : 'dark'}>
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header theme={theme} toggleTheme={toggleTheme}/>
        </Suspense>

        <main className="main">
          <Suspense fallback={<div>Loading Home...</div>}>
            <Home />
          </Suspense>
          <Suspense fallback={<div>Loading About...</div>}>
            <About />
          </Suspense>
          <Suspense fallback={<div>Loading Skills...</div>}>
            <Skills />
          </Suspense>
          <Suspense fallback={<div>Loading Services...</div>}>
            <Services />
          </Suspense>
          <Suspense fallback={<div>Loading Portfolio...</div>}>
            <Portfolio />
          </Suspense>
          <Suspense fallback={<div>Loading Qualification...</div>}>
            <Qualification />
          </Suspense>
        </main>

        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
        <Suspense fallback={<div>Loading ScrollUp...</div>}>
          <ScrollUp />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
