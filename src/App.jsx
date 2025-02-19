import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Certificates from "./Components/Certificates/Certificates";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Certificates />
    </div>
  );
}

export default App;
