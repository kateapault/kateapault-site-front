import React from 'react';

import MiniMenuLine from '../components/MiniMenuLine'
import SectionContainer from '../components/SectionContainer';

class HomePage extends React.Component {
    state = {
        section: null,
    }

    changeSection = newSection => {
        this.setState({
            section:newSection,
        })
    }

    render() {
        return(
            <div className="home-container">
                <div className="home-sidebar">
                    <div className="home-sitename">kateapault</div>
                    <div className="home-name">RASKAUSKAS</div>
                    <div className="home-name-box">
                        
                        <div className="home-description">Full Stack Engineer</div>
                        <div className="home-description">Python | Ruby | JavaScript</div>
                        <div className="mini-menu">
                            <MiniMenuLine label="Links" currentSection={this.state.section} changeSection={this.changeSection} />
                            {/* <MiniMenuLine label="Blog" changeSection={this.changeSection} /> */}
                            {/* <MiniMenuLine label="Portfolio" changeSection={this.changeSection} /> */}
                            <MiniMenuLine label="Resume" currentSection={this.state.section} changeSection={this.changeSection} />
                            <MiniMenuLine label="Summary" currentSection={this.state.section} changeSection={this.changeSection} />
                            <MiniMenuLine label="FAQ" currentSection={this.state.section} changeSection={this.changeSection} />
                        </div>
                        {/* <div className="important-links"> */}
                            {/* ~/kate's/<a>linkedin</a>/and/<a>github</a>/ */}
                        {/* </div> */}
                    </div>
                </div>
                <SectionContainer section={this.state.section} changeSection={this.changeSection}/>
            </div>
        );
    };
};

export default HomePage