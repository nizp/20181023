import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';


if(module.hot){
    module.hot.accept();
}
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , 
    document.getElementById('root')
);
