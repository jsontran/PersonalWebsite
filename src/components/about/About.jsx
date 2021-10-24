import "./about.scss"
import Fade from 'react-reveal/Fade';


export default function About() {
    return (
        <div className="About" id="About">
            <Fade top>
                <div className="title">
                    ABOUT.ME
                </div>
            </Fade>
            <div className="content">
                <div className="wrapper">

                    <div className="left">
                        <Fade left>
                            <img src="./Assets/bot.jpg" className="botImg" alt="" />
                        </Fade>
                        <Fade bottom>
                            <img src="./Assets/pfp.jpg" className="topImg" alt="" />
                        </Fade>

                    </div>
                    <div className="right">
                        <Fade top>
                            <div className="text">

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.

                            </div>
                        </Fade>
                    </div>
                </div>

            </div>



        </div>

    )
}
