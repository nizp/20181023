import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// import App from './proptypes/app';
// import App from './router/app';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './redux/reducers/reducer';
import App from './redux/app';

if(module.hot)module.hot.accept();

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
       <App/>
    </Provider>
    ,
    document.getElementById('root')
);



