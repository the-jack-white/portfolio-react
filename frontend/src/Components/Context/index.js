import React, { Component } from 'react';
import Skills from '../Skills/Skills.json';

const PortfolioContext = React.createContext();

export class Provider extends Component {

    state = {
        skills: Skills
    }

    render() {
        return(
            <PortfolioContext.Provider value={{
                skills: this.skills
            }}>
                {this.props.children}
            </PortfolioContext.Provider>
        )
    }
}

export const Consumer = PortfolioContext.Consumer;