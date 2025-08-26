import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Skills } from "./Components/Skills/Skills";

import { About } from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import { Services } from "./Components/Sevices/Services";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Services />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
