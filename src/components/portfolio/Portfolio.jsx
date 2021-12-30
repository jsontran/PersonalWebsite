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
                    <a href="https://github.com/jsontran/KirbyGame" target="_blank">
                        <div className="card">
                            <div className="top">
                                <img src="assets/p3.jpg" className="top" alt="" />
                            </div>
                            <div className="center">
                                Replication of Kirby
                            </div>
                            <div className="bottom">
                                <p>
                                    Replicated the first level and the first boss battle of Kirby's Dream Land with Visual Basic .NET. </p>
                                    <br></br>
                                    <p>
                                    Utilizing Object-Oriented Programming, the integrated toolbox, event-handlers, and sprites, the full application is created within
                                    the Visual Basic Express 2010.
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/jsontran/PersonalWebsite" target="_blank">
                        <div className="card">
                            <div className="top">
                                <img src="assets/p1.jpg" className="top" alt="" />

                            </div>
                            <div className="center">
                                Personal Website
                            </div>
                            <div className="bottom">
                                By following the Odin Project's guide for basic HTML, CSS, and JavaScript, and with the addition of self-teaching myself
                                 React and Sass using documentation and tutorials, my portfolio website was created to display my software engineering journey.
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/jsontran/KirbyGame" target="_blank">
                        <div className="card">
                            <div className="top">
                                <img src="assets/p2.jpg" className="top" alt="" />

                            </div>
                            <div className="center">
                                Tic-Tac-Toe Minimax
                            </div>
                            <div className="bottom">
                                <p>The classic game of Tic Tac Toe, in this version, 
                                the player will be against the computer (which uses the Minimax Algorithm with Alpha-Beta Pruning).</p>
                                
                                <br></br>
                                <p>
                                The game is played within the terminal.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </ Fade>
        </div>
    )
}
