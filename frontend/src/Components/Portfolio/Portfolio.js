import React from 'react';
import { Consumer } from '../Context';

import PortfolioContainer from './PortfolioContainer';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <Consumer>
            { context => {
                let biz2click = context.portfolioItems[0].biz2click;
                return (
                    <div className="port-contain-main" id="biz2click">
                        <h3>Biz2Click</h3>
                        <div className="port-container">
                            {biz2click.map(item =>
                                <div className="port-cards" key={item.id}>
                                    <PortfolioContainer 
                                        name={item.name}
                                        image={item.image}
                                        url={item.url}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )
            }}
        </Consumer>
    )
}

export default Portfolio;