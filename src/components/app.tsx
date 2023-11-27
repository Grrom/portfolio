import "./app.scss";

import Navbar from "./navbar/navbar";
import About from "./about/about";
import Hero from "./hero/hero";
import Skills from "./skills/skills";
import FeaturedProjects from "./featured_projects/featured_projects";
import Contact from "./contact/contact";

export default function App() {
  return (
    <main className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </main>
  );
}
