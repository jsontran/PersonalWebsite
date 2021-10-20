import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef = useRef()
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Designer", "Student"]
        })
        
    }, [])
    return (
        <div className="Intro" id="Intro">
            <div className="left">
                JASON
            </div>
            <img src="" className="botImg" alt=""/>
            <img src="" className="topImg" alt=""/>
            <div className="right">
                TRAN
                <h3><span ref={textRef}></span></h3>
            </div>
            
        </div>
    )
}
