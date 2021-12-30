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
                            <div>  With the Summer Research Position Award, I had the opportunity to work
                                 under Dr. Mark Lawford, Dr. Alan Wassyng, and Dr. Vera Pantelic in the Department of Computing and Software.
                                <br></br><br></br>
                                 I was assigned to work on the Reach/Coreach tool which highlights data and control flow in a Simulink model with the MatLab IDE.
                                 The tool identifies the selection's dependant blocks and/or the block that depended on the it.
                            </div>
                        </div>
                        <img src="./Assets/exp1.jpg" className="imgE" alt="" />
                    </div>
                </Fade>

                <Fade right>
                    <div className="cardO">
                        <img src="./Assets/dsc.png" className="logoO" alt="" />
                        <div className="textO">
                            <div className="TitleO">Lead of Marketing & Branding</div>
                            <div className="sTitleO">DSC McMaster | Sept 2020 - April 2021</div>
                            <div>Powered by the Developer Student Clubs, Google Developers. The club's goal is to encourage and teach students about
                                 Google Developer Techonolgies along with other aspects of the Software Engineering industry.
                                 
                                 <br></br><br></br> As one of the Lead of Marketing & Branding, I helped 
                                 lead a team of 20 and helped recruited over 400 members. I specifically worked and taught Photoshop and Figma.


                            </div>
                        </div>
                        <img src="./Assets/exp2.jpg" className="imgO" alt="" />
                    </div>
                </Fade>


            </div>
        </div>
    )
}
