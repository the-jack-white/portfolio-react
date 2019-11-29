import React, { Component } from 'react';

import './About.css';
import LinkedinBadge from './LinkedinBadge';

class About extends Component {

    state = {
        matches: window.matchMedia("(min-width: 768px)").matches,
        mountBadge: false
    }

    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 768px)").addListener(handler);
        this.setState({
            mountBadge: true
        })
    }

    render() {
        return (
            <div className="content-item">
                {this.state.matches && (
                    <div className="about-subcontainer">
                        <div className="about-item-sub">
                            <h1>About</h1>
                            <p>
                                Eye-poppingly prolific, full stack developer with a passion for metrics and information. I have an arsenal of tools and languages in my disposal to find solutions to all kinds of different problems. I worked on an average of 15 different projects for Biz2Click. The largest projects I've worked on is for HiDesign Group.
                            </p>
                        </div>
                        {this.state.mountBadge && (
                            <LinkedinBadge />
                        )}
                    </div>  
                )}
                {!this.state.matches && (
                    <div>
                        <h1>About</h1>
                        <p>
                            Eye-poppingly prolific, full stack developer with a passion for metrics and information. I have an arsenal of tools and languages in my disposal to find solutions to all kinds of different problems. I worked on an average of 15 different projects for Biz2Click. The largest projects I've worked on is for HiDesign Group.
                        </p>
                    </div>
                )}


            </div>
        )
    }
}

export default About;