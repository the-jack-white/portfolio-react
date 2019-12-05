import React, { Component } from 'react';
import biz2click  from '../Portfolio/portfolioItems';

const PortfolioContext = React.createContext();

export class Provider extends Component {

    state = {
        portfolioItems: [
            {
                biz2click
            }
        ]
    }

    render() {
        return(
            <PortfolioContext.Provider value={{
                portfolioItems: this.state.portfolioItems
            }}>
                {this.props.children}
            </PortfolioContext.Provider>
        )
    }
}

export const Consumer = PortfolioContext.Consumer;