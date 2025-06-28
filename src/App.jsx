import About from "./sections/About";
import Experiences from "./sections/Experiences";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

function App() {
  return <>
    <div className="container mx-auto max-x-7xl">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experiences/>
    </div>
  </>;
}

export default App;
