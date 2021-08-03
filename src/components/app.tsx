import "./app.scss"

import Navbar from "./navbar/navbar";
import About from "./about/about";
import Hero from "./hero/hero";
import FeaturedProjects from "./featured_projects/featured_projects";
import Skills from "./skills/skills";
import Contact from "./contact/contact";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </div>
  );
}
