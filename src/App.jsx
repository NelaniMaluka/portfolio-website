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
      <div>
        <About />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
