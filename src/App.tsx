import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Skills } from "./Components/Skills/Skills";
import { About } from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import { Services } from "./Components/Sevices/Services";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";

import ScrollButtons from "./Components/Features/ScrollButtons";
import "./App.css";

function App() {
  const sections = [
    "lol",
    "Home",
    "About",
    "Skills",
    "Projects",
    "Services",
    "Contact",
    "lol2",
  ];

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

      {/* Fixed buttons */}
      <ScrollButtons sectionIds={sections} />
    </div>
  );
}

export default App;
