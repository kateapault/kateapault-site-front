import React from 'react';

import NavBar from '../components/NavBar'

const Footer = props => {
    let footerClass
    if (props.currentPage === 'Home') {
        footerClass = "footer-black"
    } else {
        footerClass = "footer"
    }
    return(
        <div className={footerClass}>
            <div>
            c kateapault 2020
            </div>
            <div>
            privacy info
            </div>
        </div>
    );
};

export default Footer;