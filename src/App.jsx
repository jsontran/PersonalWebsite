import Topbar from "./components/topbar/Topbar";
import Spotlight from "./components/spotlight/Spotlight";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./app.scss"
import { useState } from "react";
import Fade from 'react-reveal/Fade';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <video src="./Videos/bg1.mp4" id="vid" autoPlay muted loop defaultMuted playsInline></video>


      <div className="sections">
        <Intro />
        <About />
        <Fade >
          <img className="angel1" src="./Assets/m1.png" alt="" />
        </Fade>
        <Spotlight />
        <Fade >
          <img className="angel2" src="./Assets/m2.png" alt="" />
        </Fade>
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div >
  );
}

export default App;
