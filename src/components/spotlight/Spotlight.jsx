import "./spotlight.scss"
import Fade from 'react-reveal/Fade';

export default function Spotlight() {
    return (
        <div className="Spotlight" id="Spotlight">
            <Fade>
                <h1> EXPERIENCE</h1>
            </Fade>
            <div className="container">

                <Fade left>
                    <div className="cardE">
                        <img src="./Assets/mcscert.png" className="logoE" alt="" />
                        <div className="textE">
                            <div className="TitleE">Research Assistant</div>
                            <div className="sTitleE">McMaster University | May 2021 - Aug 2021</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                        <img src="./Assets/exp1.jpg" className="imgE" alt="" />
                    </div>
                </Fade>

                <Fade right>
                    <div className="cardO">
                        <img src="./Assets/dsc.png" className="logoO" alt="" />
                        <div className="textO">
                            <div className="TitleO">Vice President of Marketing</div>
                            <div className="sTitleO">DSC McMaster | Sept 2020 - April 2021</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                        <img src="./Assets/exp2.jpg" className="imgO" alt="" />
                    </div>
                </Fade>


            </div>
        </div>
    )
}
