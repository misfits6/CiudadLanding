import { Lumiflex, Velustro } from "uvcanvas";
import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Shows from "./components/Shows";
import Tracks from "./components/Tracks";
import Video from "./components/Video";

function App() {
  return (
    <>
      <div className="bg-[url('src/assets/background2.jpg')]">
        <Navbar />
        <Hero />
        <Tracks />
        <Shows />
        <Video />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

{
  /* <div className="flex justify-center items-center align-middle">
        <img
          className=" justify-center items-center align-middle"
          src="entropia.jpeg"
          alt=""
        />
        <video className="size-72" src={videoBg} autoPlay loop muted />
      </div> */
}
