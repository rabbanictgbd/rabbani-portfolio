
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Courses from "./components/Courses";


function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar></Navbar>
      <Hero />
      <About />
      <Skills />
      <Courses/>
      <Education/>
      <Experience/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
