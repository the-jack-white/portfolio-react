import React, { Component } from 'react';

const PortfolioContext = React.createContext();

export class Provider extends Component {

    render() {
        return(
            <PortfolioContext.Provider value={{
                
            }}>
                {this.props.children}
            </PortfolioContext.Provider>
        )
    }
}

export const Consumer = PortfolioContext.Consumer;