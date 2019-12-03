import React from 'react';
import { Consumer } from '../Context';

const Skills = () => {
    return (
        <Consumer>
            { context => {
                return (
                    <h3>Hello World</h3>
                )
            }}
        </Consumer>
    )
}

export default Skills;