import About from "./sections/About";
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
   
    </div>
  </>;
}

export default App;
