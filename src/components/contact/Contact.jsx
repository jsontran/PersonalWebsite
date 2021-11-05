import "./contact.scss"
import { Document } from 'react-pdf';

export default function Contact() {


    return (
        <div className="Contact" id="Contact">
            <h1>CONTACT</h1>
            <div className="wrapper">
                <div className="left">
                </div>
                <div className="right">
                    <Document file="C:\Users\jason\PersonalWebsite\src\components\contact\resume.pdf" />
                </div>
            </div>

        </div>
    )
}
