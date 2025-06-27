import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

function App() {
  return <>
    <div className="container mx-auto max-x-7xl">
      <Navbar/>
      <Hero/>
      <About/>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
   
    </div>
  </>;
}

export default App;
