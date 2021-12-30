import "./contact.scss"
import React from 'react';
import Fade from 'react-reveal/Fade';



export default function Contact() {


    return (
        <div className="Contact" id="Contact">
            <Fade bottom>
                <h1>CONTACT</h1>
            </Fade>
            <Fade>
                <div className="wrapper">
                    <div className="left">
                        <img src="./Assets/cR.png" alt="" />
                    </div>
                    <Fade>
                        <div className="text">
                            <div className="textbox">
                                <h3>✵   </h3>
                                <a href="mailto: jjsontran@gmail.com" target="_blank"> EMAIL </a>
                                <h3>   ✵</h3>
                            </div>

                            <div className="textbox">
                                <h3>✵ </h3>
                                <a href="https://github.com/jsontran/" target="_blank">GITHUB</a>
                                <h3> ✵</h3>
                            </div>
                            <div className="textbox">
                                <h3>✵ </h3>
                                <a href="https://www.linkedin.com/in/jsontran/" target="_blank">LINKEDIN</a>
                                <h3> ✵</h3>
                            </div>
                            <div className="textbox">
                                <h3>✵ </h3>
                                <a href="https://www.instagram.com/jtefano/" target="_blank">INSTAGRAM</a>
                                <h3> ✵</h3>
                            </div>
                        </div>
                    </Fade>
                    <div className="right">
                        <img src="./Assets/cR.png" alt="" />
                    </div>
                </div>
            </Fade>

        </div>
    )
}
