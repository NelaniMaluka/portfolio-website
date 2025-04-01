import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Certificates from "./Components/Certificates/Certificates";
import ContactMe from "./Components/ContactMe/ContactMe";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Certificates />
      <ContactMe />
    </div>
  );
}

export default App;
