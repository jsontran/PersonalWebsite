import "./about.scss"
import Fade from 'react-reveal/Fade';



export default function About() {
    return (
        <div className="About" id="About">

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
                            <div className="title">
                                ABOUT.ME
                            </div>
                        </Fade>
                        <Fade top>
                            <div className="text">
                                <p>Currently, I am a third year Software Engineering (Co-op) student at McMaster University, located in Hamilton, Ontario, Canada. Apart from what
                                    I am studying in my curriculum, I am extending my current knowledge by teaching myself front-end web development.</p>

                                <br />

                                <p>In the future, I wish to explore the development of full-stack web development. Furthermore, as time becomes more valuable, I also wish to explore
                                    technologies that can provide opportunities to the world that can create an efficient and innovative use of time.  </p>

                            </div>
                        </Fade>
                    </div>
                </div>

            </div>



        </div>

    )
}
