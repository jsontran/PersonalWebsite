import Topbar from "./components/topbar/Topbar";
import Spotlight from "./components/spotlight/Spotlight";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu.jsx";
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <video src="./Videos/bg1.mp4" id="vid" autoPlay muted loop ></video>


      <div className="sections">
        <Intro />
        <About />
        <Spotlight />
        <Portfolio />
        <Contact />
      </div>
    </div >
  );
}

export default App;
