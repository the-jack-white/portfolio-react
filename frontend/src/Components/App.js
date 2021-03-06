import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particlesParams from './Particles/particlesParams';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//App Imports
import './App.css';
import Welcome from './Welcome/Welcome';
import Navigation from './Navigation/Navigation';
import About from './About/About';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';

class App extends Component {

    state = {
        matches: window.matchMedia("(min-width: 768px)").matches
    }

    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 768px)").addListener(handler);
    }

    render() {
        return(
            <BrowserRouter>
                <div className="main-container">
                    {this.state.matches && (
                        <div className="particle-container">
                            <Particles 
                                params={ particlesParams }
                            />
                        </div>
                    )}

                    {!this.state.matches && (<p></p>)}
                    
                    <Navigation />
                    <div className="content-container">
                        <Switch>
                            <Route exact path='/myportfolio' component={Welcome} />
                            <Route path='/myportfolio/about' component={About} />
                            <Route path='/myportfolio/skills' component={Skills} />
                            <Route exact path='/myportfolio/portfolio' component={Portfolio} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;