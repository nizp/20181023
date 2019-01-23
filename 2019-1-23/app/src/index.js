import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './bd_music/app';
import {store} from './bd_music/store/store';

if(module.hot)module.hot.accept();

ReactDOM.render(
    <Provider  store={store}>
        <Router>
            <App/>          
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

