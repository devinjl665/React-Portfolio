import styles from "./App.module.css";
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Experience } from "./components/experience/experience";
import { Projects } from "./components/projects/projects";

function App() {
  return (
    <div className={styles.App}> 
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />   
    </div>
  );
}

export default App;
