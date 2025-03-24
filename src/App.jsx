import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div>
        <Home />
      </div>
      <div>
        <About />
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
