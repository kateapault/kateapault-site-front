import React from 'react';

import NavButton from './NavButton'

const NavBar = props => {
    return(
        <div className="nav-bar">
            <NavButton label="Home" changePage={props.changePage}/>
            <NavButton label="About" changePage={props.changePage}/>
            <NavButton label="Blog" changePage={props.changePage}/>
            <NavButton label="Post" changePage={props.changePage} />
        </div>
    )
};

export default NavBar;