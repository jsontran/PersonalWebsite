import "./topbar.scss"
import { Person, Mail } from "@mui/icons-material"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"Topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#Intro" className="logo">
                        J.T
                    </a>
                </div>

                <div className="center">
                    11.11.21
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
