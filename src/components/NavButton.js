import React from 'react';

const NavButton = props => {
    return(
        <div className="nav-button" onClick={()=>{props.changePage(props.label)}}>
            {props.label}
        </div>
    )
};

export default NavButton;