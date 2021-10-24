import "./intro.scss"
import { useEffect, useRef } from "react"
import Fade from 'react-reveal/Fade';

export default function Intro() {
    return (
        <div className="Intro" id="Intro">
            <div className="wrapper">
                <Fade delay={2000}>
                    <div className="logo" >
                        J.T
                    </div>
                </Fade>
                <Fade bottom duration={2000}>
                    <div className="top">
                        JASON
                    </div>
                </Fade>
                <Fade top duration={2000}>
                    <div className="bot">
                        TRAN
                    </div>
                </Fade>
            </div>
        </div>
    )
}
