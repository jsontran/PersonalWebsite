import "./portfolio.scss"
import Fade from 'react-reveal/Fade';

export default function Portfolio() {
    return (
        <div className="Portfolio" id="Portfolio">
            <Fade bottom>
                <h1>PORTFOLIO</h1>
            </ Fade>
            <Fade>

                <div className="container">
                    <a href="" target="_blank">
                        <div className="card">
                            <div className="top">
                                <img src="assets/p2.jpg" className="top" alt="" />
                            </div>
                            <div className="center">
                                Tic-Tac-Toe Minimiax
                            </div>
                            <div className="bottom">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="" target="_blank">
                        <div className="card">
                            <div className="top">
                                <img src="assets/p1.jpg" className="top" alt="" />

                            </div>
                            <div className="center">
                                Personal Website
                            </div>
                            <div className="bottom">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </a>
                    <a href="" target="_blank">
                        <div className="card">
                            <div className="top">
                                <img src="assets/right-arrow.png" className="top" alt="" />

                            </div>
                            <div className="center">
                                TBA
                            </div>
                            <div className="bottom">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </a>
                </div>
            </ Fade>
        </div>
    )
}
