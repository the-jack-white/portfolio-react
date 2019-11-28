import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//App Imports
import './App.css';
import Welcome from './Welcome/Welcome';

const App = () => {
    return(
        <BrowserRouter>
            <div className="main-container">
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