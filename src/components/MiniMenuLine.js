import React from 'react'

const MiniMenuLine = props => {
    let lineClass
    if(props.currentSection === props.label) {
        lineClass = 'mini-menu-line on-me'
    } else {
        lineClass = 'mini-menu-line'
    }
    return(
        <div className={lineClass} onClick={()=>props.changeSection(props.label)}>
            <div className="bullet">~/kr $</div><div>{props.label}</div>
        </div>
    );
};

export default MiniMenuLine;