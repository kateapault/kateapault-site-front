import React from 'react'

const MiniMenuLine = props => {
    return(
        <div className="mini-menu-line" onClick={()=>props.changeSection(props.label)}>
            <div className="bullet">~/kr $</div><div>{props.label}</div>
        </div>
    );
};

export default MiniMenuLine;