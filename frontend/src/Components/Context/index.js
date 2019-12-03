import React, { Component } from 'react';
import Skills from './skills.json';

const PortfolioContext = React.createContext();

export class Provider extends Component {

    state = {
        skills: Skills.data
    }

    render() {
        return(
            <PortfolioContext.Provider value={{
                data: {
                    skills: this.state.skills
                }
            }}>
                {this.props.children}
            </PortfolioContext.Provider>
        )
    }
}

export const Consumer = PortfolioContext.Consumer;