import React from 'react';

import NavBar from '../components/NavBar'

const Header = props => {
    if (props.currentPage==='Home') {
        return(
            <div>

            </div>
        )
    } else {
        return(
            <div className="header">
                <div className="site-title">kateapault</div>
                <div className="site-subtitle-block">
                    <div className="decorative-line"></div>
                    <div className="site-subtitle">IDK I JUST MAKE STUFF</div>
                    <div className="decorative-line"></div>
                </div>
                <NavBar changePage={props.changePage}/>
            </div>
        );
    }
};

export default Header;