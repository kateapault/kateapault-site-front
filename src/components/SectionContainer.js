import React from 'react'

import SummarySection from './SummarySection'
import FAQSection from './FAQSection'
import LinksSection from './LinksSection'
import ResumeSection from './ResumeSection'

const SectionContainer = props => {
    let containerClass
    if (props.section) {
        containerClass = 'section-container'
    } else {
        containerClass = 'hide-me'
    }

    let section 
    switch(props.section) {
        case 'Summary':
            section = <SummarySection />
            break;
        case 'FAQ':
            section = <FAQSection />
            break;
        case 'Links':
            section = <LinksSection />
            break;
        case 'Resume':
            section = <ResumeSection />
            break;
        default:
            section = "None"
            break;
    }

    return(
        <div className={containerClass}>
            <div className="x" onClick={()=>{props.changeSection(null)}}>X</div>
            {section}
        </div>
    )
}

export default SectionContainer