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
                    <a href="https://github.com/jsontran/KirbyGame" target="_blank" style={{ textDecoration: 'none', color:'black' }}>
                        <div className="card">
                            <div className="top">
                                <img src="Assets/p3.jpg" className="top" alt="" />
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
                    <a href="https://github.com/jsontran/MERN-Void" target="_blank" style={{ textDecoration: 'none', color:'black' }}>
                        <div className="card">
                            <div className="top">
                                <img src="Assets/p1.jpg" className="top" alt="" />

                            </div>
                            <div className="center">
                                MERN-VOID
                            </div>
                            <div className="bottom">
                                Developed a full-stack web application to help users with self-expression and mental health by posting messages with
                                auto-deletion from the database after 2 hours
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/jsontran/KirbyGame" target="_blank" style={{ textDecoration: 'none', color:'black' }}>
                        <div className="card">
                            <div className="top">
                                <img src="Assets/london.jpg" className="top" alt="" />

                            </div>
                            <div className="center">
                                London Transit App
                            </div>
                            <div className="bottom">
                                <p>Assembled a Python application following SOLID principles to enhance urban planning around the London subway</p>
                                
                                <br></br>
                                <p>
                                Innovated Dijkstra’s, A*, and Depth First-Search algorithm to attain the most efficient path for a subset of stations
                                and to produce urbanism diagnosis to improve future development planning
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/jsontran/KirbyGame" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="card">
                            <div className="top">
                                <img src="Assets/p2.jpg" className="top" alt="" />

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
