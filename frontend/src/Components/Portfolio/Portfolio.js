import React from 'react';
import { Consumer } from '../Context';

const Portfolio = () => {
    return (
        <Consumer>
            { context => {
                return (
                    <h1>Hello World</h1>
                )
            }}
        </Consumer>
    )
}

export default Portfolio;