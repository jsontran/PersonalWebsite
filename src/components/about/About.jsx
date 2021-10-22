import "./about.scss"
import Zoom from 'react-reveal/Zoom';


export default function About() {
    return (
        <div className="About" id="About">

            <div className="wrapper">
                <div className="left">
                    <img src="./Assets/bot.jpg" className="botImg" alt="" />
                    <img src="./Assets/pfp.jpg" className="topImg" alt="" />
                </div>
                <div className="right">
                    HELLo
                </div>
            </div>

            <div className="title">
                ABOUT ME
            </div>
        </div>

    )
}
