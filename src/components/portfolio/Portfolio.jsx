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
                    <div className="card">
                        <div className="top">
                            <img src="assets/right-arrow.png" className="left" alt="" />
                            <img
                                className="user"
                                src=""
                                alt=""
                            />
                            <img className="right" src="" alt="" />
                        </div>
                        <div className="center">
                        </div>
                        <div className="bottom">
                        </div>
                    </div>
                    <div className="card">
                        <div className="top">
                            <img src="assets/right-arrow.png" className="left" alt="" />
                            <img
                                className="user"
                                src=""
                                alt=""
                            />
                            <img className="right" src="" alt="" />
                        </div>
                        <div className="center">
                        </div>
                        <div className="bottom">
                        </div>
                    </div>
                    <div className="card">
                        <div className="top">
                            <img src="assets/right-arrow.png" className="left" alt="" />
                            <img
                                className="user"
                                src=""
                                alt=""
                            />
                            <img className="right" src="" alt="" />
                        </div>
                        <div className="center">
                        </div>
                        <div className="bottom">
                        </div>
                    </div>
                </div>
            </ Fade>
        </div>
    )
}
