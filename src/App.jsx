import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div id="About1">
        <About />
      </div>
      <div id="Experience1">
        <Experience />
      </div>
      <div id="Projects1">
        <Projects />
      </div>
      <div id="ContactMe1">
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
