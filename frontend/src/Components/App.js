import React from 'react';
import Particles from 'react-particles-js';
import particlesParams from './Particles/particlesParams';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//App Imports
import './App.css';
import Welcome from './Welcome/Welcome';
import Navigation from './Navigation/Navigation';

const App = () => {
    return(
        <BrowserRouter>
            <div className="main-container">
                <div className="particle-container">
                    <Particles 
                        params={ particlesParams }
                    />
                </div>
                <Navigation />
                <div className="content-container">
                    <Switch>
                        <Route exact path='/' component={Welcome} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;