import About from "./components/About";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Services from "./components/Services";


function App() {
  return (
    <div className=" flex flex-col items-center justify-center">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Details />
    <NewsLetter />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
