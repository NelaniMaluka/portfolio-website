import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Certificates from "./Components/Certificates/Certificates";
import ContactMe from "./Components/ContactMe/ContactMe";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <ContactMe />
    </div>
  );
}

export default App;
