import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

import { Provider } from './Components/Context';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById('root')
);
