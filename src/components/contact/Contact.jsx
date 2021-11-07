import "./contact.scss"
import React from 'react';
// using ES6 modules
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';


import resume from '../../resume.pdf';

export default function Contact() {


    return (
        <div className="Contact" id="Contact">
            <h1>CONTACT</h1>
            <div className="wrapper">
                <div className="left">
                </div>
                <div className="right">
                    <Document file={resume}>
                        <Page pageNumber={1} />
                    </Document>
                </div>
            </div>

        </div>
    )
}
