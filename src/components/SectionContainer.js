import React from 'react'

const SectionContainer = props => {
    let containerClass
    if (props.section) {
        containerClass = 'section-container'
    } else {
        containerClass = 'hide-me'
    }

    return(
        <div className={containerClass}>
            <div className="x" onClick={()=>{props.changeSection(null)}}>X</div>
            <div>
                hey I'm a placeholder
            </div>
        </div>
    )
}

export default SectionContainer