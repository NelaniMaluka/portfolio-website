import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Skills } from "./Components/Skills/Skills";
import { About } from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import { Services } from "./Components/Sevices/Services";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";

import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Nelani Maluka | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Nelani Maluka, Full-Stack Developer skilled in React, Spring Boot, Java, and SQL. Explore projects like Blog Land and Kick Land, services in frontend, backend, and database development."
        />
        <meta
          name="keywords"
          content="Nelani Maluka, Full-Stack Developer, React, Spring Boot, Java Developer, SQL, Portfolio, Blog Land, Kick Land, Frontend, Backend, Software Engineer, Johannesburg Developer"
        />
        <meta name="author" content="Nelani Maluka" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="Nelani Maluka | Full-Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore my portfolio showcasing React, Spring Boot, and full-stack projects like Blog Land and Kick Land. Based in Johannesburg, I specialize in scalable, modern applications."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfolio-website-87fcc.web.app/"
        />
        <meta
          property="og:image"
          content="https://portfolio-website-87fcc.web.app/Images/Nelani.jpg"
        />
        <meta property="og:locale" content="en_ZA" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nelani Maluka | Full-Stack Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="React & Spring Boot developer building full-stack apps. View projects like Blog Land and Kick Land."
        />
        <meta
          name="twitter:image"
          content="https://portfolio-website-87fcc.web.app/Images/Nelani.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://portfolio-website-87fcc.web.app/" />

        {/* Structured Data (Google Rich Snippets) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "name": "Nelani Maluka",
                "url": "https://portfolio-website-87fcc.web.app/",
                "image": "https://portfolio-website-87fcc.web.app/Images/Nelani.jpg",
                "sameAs": [
                  "https://linkedin.com/in/nelanimaluka",
                  "https://github.com/NelaniMaluka"
                ],
                "jobTitle": "Full-Stack Developer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "LearnHall"
                },
                "alumniOf": {
                  "@type": "CollegeOrUniversity",
                  "name": "CTU Training Solutions"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://portfolio-website-87fcc.web.app#Home" },
                  { "@type": "ListItem", "position": 2, "name": "About", "item": "https://portfolio-website-87fcc.web.app#About" },
                  { "@type": "ListItem", "position": 3, "name": "Skills", "item": "https://portfolio-website-87fcc.web.app#Skills" },
                  { "@type": "ListItem", "position": 4, "name": "Projects", "item": "https://portfolio-website-87fcc.web.app#Projects" },
                  { "@type": "ListItem", "position": 5, "name": "Services", "item": "https://portfolio-website-87fcc.web.app#Services" },
                  { "@type": "ListItem", "position": 6, "name": "Contact", "item": "https://portfolio-website-87fcc.web.app#Contact" }
                ]
              },
              {
                "@type": "WebSite",
                "url": "https://portfolio-website-87fcc.web.app/",
                "name": "Nelani Maluka Portfolio",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://portfolio-website-87fcc.web.app/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "SoftwareApplication",
                "name": "Kick Land",
                "applicationCategory": "WebApplication",
                "operatingSystem": "All",
                "url": "https://kick-land.web.app/",
                "creator": {
                  "@type": "Person",
                  "name": "Nelani Maluka"
                }
              },
              {
                "@type": "SoftwareApplication",
                "name": "Blog Land",
                "applicationCategory": "WebApplication",
                "operatingSystem": "All",
                "url": "https://blog-land.web.app/",
                "creator": {
                  "@type": "Person",
                  "name": "Nelani Maluka"
                }
              }
            ]
          }
          `}
        </script>
      </Helmet>

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Services />
      <ContactMe />
      <Footer />
      <ScrollButtons sectionIds={sections} />
    </div>
  );
}

export default App;
