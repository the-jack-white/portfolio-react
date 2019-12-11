import React, { Component } from 'react';

import './About.css';
// import LinkedinBadge from './LinkedinBadge';
import LinkedIn from './LinkedIn';

class About extends Component {

    state = {
        matches: window.matchMedia("(min-width: 768px)").matches
    }

    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 768px)").addListener(handler);
    }

    render() {
        return (
            <div className="content-item">
                {this.state.matches && (
                    <div className="about-subcontainer">
                        <div className="about-item-sub">
                            
                            <p>
                                My name is Jack White (and before you ask, I'm not related to the lead singer of The White Stripes).<br/><br/>I started my career as a GIS Technician, but soon changed my direction to Full Stack Development, more specifically, Front End Development.
                                <br/><br/>I can go on a whole tangent on why I made the decision, but in short, I found my passion. 
                                As I got to work on my new passion, I realised how little time in a day there is to learn, and three years later, I realised that one will never stop learning, hence why I call it my passion.
                                <br/><br/>I love to collaborate and share new ideas with like-minded people, so if you’re the same, feel free to drop me a message on <a href="https://www.linkedin.com/in/the-jack-white/">LinkedIn</a>.
                            </p>
                        </div>
                        <LinkedIn />
                    </div>  
                )}
                {!this.state.matches && (
                    <div>
                        
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