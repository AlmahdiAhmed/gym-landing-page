import "./App.scss";
import Contact from "./Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
